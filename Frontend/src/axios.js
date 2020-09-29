import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-nick-backend.herokuapp.com/'
})

export default instance;