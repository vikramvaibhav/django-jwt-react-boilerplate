import AuthService from '../../services/AuthService'

import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAILURE
} from './postType'

export const listPosts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: POST_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `JWT ${userInfo.access}`,
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        }

        const { data } = await AuthService.getPosts(config)

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data,
        })
    }


    catch (error) {
        dispatch({
            type: POST_LIST_FAILURE,
            payload: error.response && error.response.message
                ? error.response.data.message
                : error.message
        })
    }
}