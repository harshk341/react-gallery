import axios from "axios";
import { BASE_URL, ACCESS_API_KEY } from "src/constants/api";
const camelize = require("camelize");

export const instanceOfAxios = axios.create({
  baseURL: BASE_URL,
  timeout: "10000",
});

instanceOfAxios.interceptors.request.use(
  (config) => {
    let newUrl = `${config.url}&{${ACCESS_API_KEY}`;
    if (!config.url.includes("?")) {
      newUrl = newUrl.replace("&", "?");
    }
    config.url = newUrl;
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

instanceOfAxios.interceptors.response.use(
  (response) => {
    return camelize(response.data);
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response);
    }
    if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
  }
);

export const apiCaller = async (
    endpoint,
    method = 'gets',
    body,
    params,
    signal
) => {
    return instanceOfAxios({
        url: endpoint,
        method,
        data: body,
        params,
        signal   
    });
}
