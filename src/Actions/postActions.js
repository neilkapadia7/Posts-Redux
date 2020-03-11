import { FETCH_POSTS, NEW_POST, SET_LOADING } from "../Actions/types";
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
    try {
        setLoading();

        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }

        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({type: FETCH_POSTS, payload: res.data});
    } 
    catch (err) {
        
    }
}

const setLoading = () => {
    return {
        type: SET_LOADING
    }
}