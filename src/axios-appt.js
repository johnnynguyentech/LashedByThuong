import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lashedbythuong-ede8e.firebaseio.com/'
});

export default instance;