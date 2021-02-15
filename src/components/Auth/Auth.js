import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage'
import SignupPage from './SignupPage/SignupPage'
import AdminPage from './AdminPage/AdminPage'

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
                <Route path='/auth/admin'>
                    <AdminPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Auth
