import axiosInstanceAuth from '../axios/axiosAuth'
import axiosInstance from '../axios'

const login = (auth_data) => {
    console.log(axiosInstanceAuth)
    return axiosInstanceAuth.post(`api/token/obtain/`, auth_data)
}

const register = (register_data) => {
    return axiosInstanceAuth.post(`api/user/register/`, register_data)
}

const blacklistToken = (refresh_token, config) => {
    axiosInstance.defaults.headers.post['Content-Type'] = config.headers['Content-Type']
    axiosInstance.defaults.accept = config.headers.accept
    return axiosInstance.post(`user/logout/blacklist/`, refresh_token)
}

const getPosts = (config) => {
    axiosInstance.defaults.headers.common['Authorization'] = config.headers.Authorization
    axiosInstance.defaults.headers.post['Content-Type'] = config.headers['Content-Type']
    axiosInstance.defaults.accept = config.headers.accept
    return axiosInstance.get('posts/')
}

export default {
    login,
    register,
    getPosts,
    blacklistToken
}