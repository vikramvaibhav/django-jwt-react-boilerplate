import AuthService from '../../services/AuthService'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_FAILURE
} from './userType'

import {
    POST_LIST_RESET
} from '../post/postType'


export const login = (auth_data) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const { data } = await AuthService.login(auth_data)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }

    catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })

    }
}

export const register = (register_data) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const { data } = await AuthService.register(register_data)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: USER_REGISTER_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const logout = () => (dispatch, getState) => {

    const { userLogin: { userInfo }, } = getState()

    const refresh_token = { refresh: userInfo.refresh }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    }

    AuthService.blacklistToken(refresh_token, config)

    localStorage.removeItem('userInfo')

    // USER_LOGOUT is declared inside userLoginReducer
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: POST_LIST_RESET })
}