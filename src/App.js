import React from 'react';
import {LoginPage} from "./Pages/LoginPage/LoginPage";
import {Route, Switch} from "react-router";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {MainPage} from "./Pages/MainPage/MainPage";

function App() {

    let history = useHistory();
    const {login} = useSelector(({LoginReducer}) => LoginReducer)

    return (
        <div className="App">
            <div className='min-vh-100 overflow-hidden'>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    {login === false ? history.push('/login') : history.push('/')}
                </Switch>
            </div>
        </div>
    );
}

export default App;
