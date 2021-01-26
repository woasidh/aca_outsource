import React, { useState, useEffect } from 'react'
import './SignupPage.css'
import StepContainer from './section/StepConatiner/StepContainer'

function SignupPage() {

    const [currentStep, setcurrentStep] = useState(0);

    const onNextBtn = () => {
        const termCheck = document.querySelector('input#terms');
        const personCheck = document.querySelector('input#personInfo');
        let shouldPass = 1;

        /* check if all terms are agreed */
        if (!termCheck.checked) {
            shouldPass = 0;
            alert('동의해주세요');
            /* console.log(AllCheck.checked); */
            return (shouldPass);
        } else {
            if (!personCheck.checked) {
                shouldPass = 0;
                alert('동의해주세요');
                /* console.log(AllCheck.checked); */
                return (shouldPass);
            } else {
                shouldPass = 1;
                /* console.log(AllCheck.checked); */
                return (shouldPass);
            }
        }
    }

    useEffect(() => {

        const AllCheck = document.querySelector('input#agreAll');
        const termCheck = document.querySelector('input#terms');
        const personCheck = document.querySelector('input#personInfo');

        AllCheck.addEventListener('change', function () {
            if (this.checked) {
                termCheck.checked = true;
                personCheck.checked = true;
            } else {
                termCheck.checked = false;
                personCheck.checked = false;
            }
        })

    })



    return (
        <div className="signupPage">
            <span className="signup__title">회원가입</span>
            <StepContainer currentStep={currentStep} />
            <div className="agreeContianer">
                <div className="signup_agreeAll">
                    <input type="checkbox" id="agreAll" name="agreAll" />
                    <label htmlFor="agreAll">이용약관 전체 동의하기</label>
                </div>
                <div className="signup__terms">
                    <div className="terms__left">
                        <input type="checkbox" id="terms" name="terms" />
                        <label htmlFor="terms">[필수] 이용약관에 동의합니다.</label>
                    </div>
                    <div className="signup__terms__more">
                        <a href="/auth/signupTerms">
                            <span>자세히보기</span>
                            <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="signup__person">
                    <div className="person__left">
                        <input type="checkbox" id="personInfo" name="personInfo" />
                        <label htmlFor="personInfo">[필수] 개인정보 수집 및 이용에 동의합니다.</label>
                    </div>
                    <div className="signup__person__more">
                        <a href="/auth/signupPersonalInfo">
                            <span>자세히보기</span>
                            <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="signup__link">
                <button><span>홈으로</span></button>
                <button onClick={onNextBtn}><span>다음단계</span></button>
            </div>
        </div>
    )
}

export default SignupPage
