import React, { useState } from 'react'
import './SignupPage.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import StepContainer from './section/StepConatiner/StepContainer'
import AgreeContainer from './section/AgreeContainer/AgreeContainer'
import SignupLink from './section/SignupLink/SignupLink'
import InfoContainer from './section/InfoContainer/InfoContainer'

function SignupPage() {

    const [currentStep, setcurrentStep] = useState(0);

    const nextStep = () => {
        setcurrentStep(currentStep + 1);
    }


    return (
        <Router>
            <div className="signupPage">
                <span className="signup__title">회원가입</span>
                <Switch>
                    <Route path='/auth/signup/terms'>
                        <StepContainer currentStep={0} />
                        <AgreeContainer />
                        <SignupLink currentStep={0}/>
                    </Route>
                    <Route path='/auth/signup/info'>
                        <StepContainer currentStep={1} />
                        <InfoContainer />
                        <SignupLink currentStep = {1} />
                    </Route>
                    <Route path='/auth/signup/complete'>
                        <StepContainer currentStep={2} />
                        <div className="signup__completeMsg">
                            회원가입이 완료되었습니다.
                        </div>
                        <SignupLink currentStep = {2} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default SignupPage
