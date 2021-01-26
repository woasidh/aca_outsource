import React, { useState, useEffect } from 'react'
import './SignupPage.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import StepContainer from './section/StepConatiner/StepContainer'
import AgreeContainer from './section/AgreeContainer/AgreeContainer'
import SignupLink from './section/SignupLink/SignupLink'

function SignupPage() {

    const [currentStep, setcurrentStep] = useState(0);

    const nextStep = () => {
        setcurrentStep(currentStep + 1);
    }

    const beforeStep = () => {
        setcurrentStep(currentStep - 1);
    }

    return (
        <Router>
            <Switch>
                <div className="signupPage">
                    <span className="signup__title">회원가입</span>
                    <Route path='/auth/signup/terms'>
                        <StepContainer currentStep={currentStep} />
                        <AgreeContainer />
                        <SignupLink nextStep={nextStep} />
                    </Route>
                    <Route path='/auth/signup/info'>
                        <StepContainer currentStep={currentStep} />
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}

export default SignupPage
