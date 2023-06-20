import axios from "axios";

export const url = {
  url: "https://api-deslocamento.herokuapp.com/api/",
  version: "v1/",
};

export const service = axios.create({
  baseURL: url.url + url.version,

  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use(
  (res) => res,
  (error) => {
    alert(`Network Error: ${error.message} - (${error.response.status})`);
  }
);
