import {setIsvalidLogin, setIsvalidPassword, setLogin, setLoginName, setPassword, setRememberMe} from "./LoginAction";
import cookie from 'js-cookie';

export const handleChangeLogin = (loginValue, dispatch) => {
    dispatch(setLoginName(loginValue))
    dispatch(setIsvalidLogin(false))
}

export const handleChangePassword = (passwordValue, dispatch) => {
    dispatch(setPassword(passwordValue))
    dispatch(setIsvalidPassword(false))
}

export const handleSubmitLoginForm = (event, login, password, dispatch) => {
    event.preventDefault()
    if(!login && !password) {
        dispatch(setIsvalidLogin(true))
        dispatch(setIsvalidPassword(true))
        return
    }
    dispatch(setPassword(''))
    dispatch(setLoginName(''))
    dispatch(setLogin(true))
}

export const handleCheck = (value, dispatch) => {
    dispatch(setRememberMe(value))
}

export const saveUser = (login, password) => {
    const dataUser = {
        login,
        password,
    }
    cookie.set('user', dataUser)
}
export const loadingPage = (dispatch) => {
    const user = JSON.parse(cookie.get('user'))
    dispatch(setLoginName(user.login))
    dispatch(setPassword(user.password))
}