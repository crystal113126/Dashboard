
import axios from 'axios'

export const BASE_URL = "http://ec2-54-151-26-56.us-west-1.compute.amazonaws.com:2000/";

export const fetchFromAPI = async(url) => {
const urll = `${BASE_URL}${url}`;
console.log(urll);
 const {data} = await axios.get(`${BASE_URL}${url}`);
 console.log(data);
 return data;
}

