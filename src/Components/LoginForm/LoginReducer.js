import {
    SET_ISVALID_LOGIN,
    SET_ISVALID_PASSWORD,
    SET_LOGIN,
    SET_LOGIN_NAME,
    SET_PASSWORD,
    SET_REMEMBER_ME
} from "./constants";

const initialState = {
    loginName:'',
    password:'',
    isValidLogin:false,
    isValidPassword:false,
    rememberMe:false,
    login: false,
}

export default function LoginReducer (state = initialState, action)  {
    switch (action.type) {
        case SET_LOGIN_NAME:
            return {
                ...state,
                loginName: action.payload
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case SET_ISVALID_LOGIN:
            return {
                ...state,
                isValidLogin: action.payload
            }
        case SET_ISVALID_PASSWORD:
            return {
                ...state,
                isValidPassword: action.payload
            }
        case SET_REMEMBER_ME:
            return {
                ...state,
                rememberMe: action.payload
            }
        case SET_LOGIN :
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}