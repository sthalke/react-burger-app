import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-36272.firebaseio.com/'
});

export default instance;