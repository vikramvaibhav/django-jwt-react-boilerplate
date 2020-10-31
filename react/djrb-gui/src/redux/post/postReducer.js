import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAILURE,
    POST_LIST_RESET
} from './postType'


export const postListReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { loading: true, posts: [] }
        case POST_LIST_SUCCESS:
            return {
                loading: false,
                posts: action.payload
            }
        case POST_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case POST_LIST_RESET:
            return { posts: [] }
        default:
            return state
    }

}