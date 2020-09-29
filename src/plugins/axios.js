import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/CriticalGeek/drive',
});

export default axiosInstance;
