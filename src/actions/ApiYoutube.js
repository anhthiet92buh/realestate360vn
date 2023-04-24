import axios from 'axios';
import Config from 'react-native-config';

const axiosYoutube = axios.create();

axiosYoutube.interceptors.request.use(
  function (config) {
    config.baseURL = Config.API_YOUTUBE_V3;
    config.headers;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosYoutube.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error?.response) {
      console.log(error);
    } else {
      const {config, status, data} = error?.response || {};
      console.log(`URL: ${config?.url}\n`, `STATUS: ${status}\n`, data);
    }
    return Promise.reject(error);
  },
);

export const ApiGetYTBVideos = () => {
  const params = {
    key: 'AIzaSyBuPoDJyzW0g34Anq6zcDNH1MOUu3YmYlc',
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 10,
  };
  return {
    method: 'get',
    url: 'videos',
    params,
  };
};
