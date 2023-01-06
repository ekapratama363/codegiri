import * as axios from "axios";

export default class Api {
  constructor() {
    this.client_id = 'CaVyNcHIKOZkP7cRY-JiipOfzXc2Q-xwd_gXbrnZrmA';
    this.api_url = "https://api.unsplash.com";
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getImageList = (params) => {
    return this.init().get(`/photos?client_id=${this.client_id}`, { params });
  };

  getImageListSearch = (params) => {
    return this.init().get(`/search/photos?client_id=${this.client_id}`, { params });
  };
}
