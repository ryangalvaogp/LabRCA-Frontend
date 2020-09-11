import axios from 'axios';

 const Api= axios.create({
    baseURL: 'http://192.168.0.110:4444/'  
})
console.log(Api);
export default Api;