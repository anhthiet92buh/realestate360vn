import {makeAutoObservable, action, runInAction} from 'mobx';

import {ApiGetYTBVideos, ApiGetYTBPlaylists} from '../actions/ApiYoutube';

class YoutubeStore {
  ytbVideos = null;
  loadingYTBVideos = false;

  ytbPlaylists = null;
  loadingYTBPlaylists = false;

  constructor() {
    makeAutoObservable(this, {
      fetchYTBVideos: action.bound,
      fetchYTBPlaylists: action.bound,

      clearYTBVideos: action.bound,
      clearYTBPlaylists: action.bound,
    });
  }

  async fetchYTBVideos() {
    this.loadingYTBVideos = true;
    try {
      let response = await ApiGetYTBVideos();
      runInAction(() => {
        this.ytbVideos = response?.data;
        this.loadingYTBVideos = false;
      });
    } catch (error) {
      this.loadingYTBVideos = false;
    }
  }

  async fetchYTBPlaylists() {
    this.loadingYTBPlaylists = true;
    try {
      let response = await ApiGetYTBPlaylists();
      runInAction(() => {
        this.ytbPlaylists = response?.data;
        this.loadingYTBPlaylists = false;
      });
    } catch (error) {
      this.loadingYTBPlaylists = false;
    }
  }

  clearYTBVideos() {
    this.ytbVideos = null;
  }

  clearYTBPlaylists() {
    this.ytbPlaylists = null;
  }
}

export default new YoutubeStore();
