import axios from 'axios';

 const Api= axios.create({
    baseURL: 'https://examplerggp.herokuapp.com/'  
})
console.log(Api);
export default Api;