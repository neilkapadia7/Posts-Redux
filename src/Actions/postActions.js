import { FETCH_POSTS, NEW_POST, SET_LOADING } from "../Actions/types";
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    try {
        setLoading();

        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({type: FETCH_POSTS, payload: res.data});
    } 
    catch (err) {
        console.log(err);
    }
}

export const createPost = (postData) => async dispatch => {
    try {

        setLoading();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        console.log('1');
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', postData, config);
        console.log('2');
        dispatch({type: NEW_POST, payload: res.data});
        console.log('3');
    } 
    catch (err) {
        console.log(err);
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}