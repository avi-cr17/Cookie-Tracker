import axios from "axios";


const URL = 'https://jsonplaceholder.typicode.com/posts';

const list = axios.get(URL);
console.log(list);

export default list;