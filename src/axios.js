import axios from 'axios';

// we can create differents config and then import the one needed
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
