import axios from 'axios';
import { store } from 'redux/configureStore';
import { API_URL } from 'helpers/config';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(config => {
  const token = store.getState()?.token?.value || '';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  config.headers.post.Accept = 'application/json';
  config.headers.common['Content-Type'] = 'multipart/form-data';

  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default instance;
