import {
    SET_ISVALID_LOGIN,
    SET_ISVALID_PASSWORD,
    SET_LOGIN,
    SET_LOGIN_NAME,
    SET_PASSWORD,
    SET_REMEMBER_ME
} from "./constants";

export const setLoginName = (loginValue) => {
    return {
        type:SET_LOGIN_NAME,
        payload: loginValue
    }
}
export const setPassword = (passwordValue) => {
    return {
        type: SET_PASSWORD,
        payload: passwordValue
    }
}
export const setIsvalidLogin = (value) => {
    return {
        type: SET_ISVALID_LOGIN,
        payload:value
    }
}
export const setIsvalidPassword = (value) => {
    return {
        type: SET_ISVALID_PASSWORD,
        payload:value
    }
}
export const setRememberMe = (value) => {
    return {
        type: SET_REMEMBER_ME,
        payload:value
    }
}
export const setLogin = (value) => {
    return {
        type: SET_LOGIN,
        payload: value
    }
}