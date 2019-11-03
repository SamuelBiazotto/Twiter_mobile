import axios from 'axios';

const Api = axios.create({
   // baseUrl: '172.20.10.2:3000',
   baseUrl: '10.10.10.154:3000',
})


export default Api;