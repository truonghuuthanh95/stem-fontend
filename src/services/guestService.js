import axios from "axios";
import { BASE_URL, LOGIN } from './contanst'
export const login = (data) =>{
    return axios.post(`${BASE_URL + LOGIN}`, data);
}