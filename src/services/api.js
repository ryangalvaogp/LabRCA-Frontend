import axios from 'axios';

 const Api= axios.create({
    baseURL: process.env.REACT_APP_API_URL   
})
console.log(Api);
export default Api;