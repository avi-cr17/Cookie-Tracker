import { FETCH_POST,NEW_POST } from "./Types";
import axios from "axios";

export function fetchPosts(){
    return function (dispatch) {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        const list = axios.get(URL).then(data => dispatch({
            type : FETCH_POST,
            payload : data.data
        }));


    }
}