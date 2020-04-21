import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://omnistack-backend.herokuapp.com'
    // baseURL: 'http://10.0.3.2:3333'
    // baseURL: 'http://localhost:3333',
    baseURL: 'http://192.168.0.106:3333',
});

export default api;