import React from 'react';
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import cookie from 'js-cookie';
import {
    handleChangeLogin,
    handleChangePassword,
    handleCheck,
    handleSubmitLoginForm, loadingPage,
    saveUser
} from "./login";

export const LoginForm = () => {

    const {loginName, password, isValidLogin, isValidPassword, rememberMe} = useSelector(({LoginReducer}) => LoginReducer)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if(cookie.get('user')){
            loadingPage(dispatch)
        }
    },[])

    React.useEffect(() => {
        if(rememberMe === true) {
            saveUser(loginName,password)
        }
    },[rememberMe])

    return (
        <div className='container min-vh-100'>
            <div className='row min-vh-100'>
                <div className='col d-flex align-items-center justify-content-center'>
                    <div className="card shadow p-3 mb-5 bg-white rounded border border-info" style={{width: '30rem'}}>
                        <div className="card-body">
                            <h6 className="card-title text-center mb-3 ">Введите логин и пароль.</h6>
                            <form>
                                <Input value={loginName} change={(loginValue) => handleChangeLogin(loginValue,dispatch)}
                                       label="Email" type="email" isvalid={isValidLogin}/>
                                <Input value={password} change={(passwordValue) => handleChangePassword(passwordValue, dispatch)}
                                       label="Password" type="password" isvalid={isValidPassword}/>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <div className="form-check float-right">
                                            <input
                                                checked={rememberMe}
                                                onClick={(event) => handleCheck(event.target.checked, dispatch)}
                                                type="checkbox" className="form-check-input"
                                                id="exampleCheck1"
                                            />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Запомнить
                                                меня</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col '>
                                        <button
                                            disabled={!loginName && !password ? true : false}
                                            type="submit"
                                            className="btn btn-outline-success float-right"
                                            onClick={(event) => {
                                                handleSubmitLoginForm(event, loginName, password, dispatch)
                                            }}
                                        >
                                            Войти
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}