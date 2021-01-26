import './SignupLink.css'
import React, { useState, useEffect } from 'react'

function SignupLink(props) {

    const onNextBtn = () => {
        const termCheck = document.querySelector('input#terms');
        const personCheck = document.querySelector('input#personInfo');

        /* check if all terms are agreed */
        if (!termCheck.checked) {
            alert('동의해주세요');
        } else {
            if (!personCheck.checked) {
                alert('동의해주세요');
            } else {
                props.nextStep();
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
        <div className="signup__link">
        <button><span>홈으로</span></button>
        <button onClick={onNextBtn}><span>다음단계</span></button>
    </div>
    )
}

export default SignupLink
