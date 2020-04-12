import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    // baseURL: 'https://omnistack-backend.heroku.com',
});

export default api;