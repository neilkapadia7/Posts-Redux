import { FETCH_POSTS, NEW_POST, SET_LOADING } from "../Actions/types";

const initialState = {
    items: [],
    item: {},
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case NEW_POST:
            console.log('hello');
            return {
                ...state,
                items: [action.payload, ...state.items],
                item: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}