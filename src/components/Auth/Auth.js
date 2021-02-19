import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage'
import SignupPage from './SignupPage/SignupPage'
function Auth() {
    return (
        <Router>
            <Switch>
                <Route path='/auth/login'>
                    <LoginPage />
                </Route>
                <Route path='/auth/signup'>
                    <SignupPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Auth
