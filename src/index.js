import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// doesn't work ? see https://github.com/axios/axios/issues/649
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.interceptors.request.use(request => {
  console.log('request', request);
  // edit request config
  return request;
}, error => {
  // if the request sending fails
  console.log('request error', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log('response', response);
  // edit request config
  return response;
}, error => {
  // if the response fails
  console.log('response error', error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
