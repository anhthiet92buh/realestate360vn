import {makeAutoObservable, action, runInAction} from 'mobx';

import {ApiGetYTBVideos} from '../actions/ApiYoutube';

class YoutubeStore {
  ytbVideos = null;
  loadingYTBVideos = false;

  constructor() {
    makeAutoObservable(this, {
      fetchYTBVideos: action.bound,

      clearYTBVideos: action.bound,
    });
  }

  async fetchYTBVideos() {
    this.loadingYTBVideos = true;
    try {
      let response = await ApiGetYTBVideos();
      runInAction(() => {
        this.ytbVideos = response?.items;
        this.loadingYTBVideos = false;
      });
    } catch (error) {
      this.loadingYTBVideos = false;
    }
  }

  clearYTBVideos() {
    this.ytbVideos = null;
  }
}

export default new YoutubeStore();
