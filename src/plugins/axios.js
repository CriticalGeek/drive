import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://c382dd499183.ngrok.io',
});

export default axiosInstance;
