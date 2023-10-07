import { apiUrl } from './api';
import axios from "axios";

const apiCall =  axios.create({
    baseURL:`${apiUrl}`
})

export default apiCall