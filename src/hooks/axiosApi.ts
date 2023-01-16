import axios from 'axios';

// add token for authorization
const axiosApi = axios.create({
    baseURL: "http://localhost:8000/api/v1/"
});

export default axiosApi;  