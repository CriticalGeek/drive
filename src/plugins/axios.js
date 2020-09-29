import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://b4f35b6980dc.ngrok.io',
});

export default axiosInstance;
