import { combineReducers } from 'redux'
import { userLoginReducer, userRegisterReducer } from './user/userReducer'
import { postListReducer } from './post/postReducer'

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    postList: postListReducer,
})

export default rootReducer