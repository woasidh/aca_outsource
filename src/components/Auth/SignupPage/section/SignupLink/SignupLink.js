import './SignupLink.css'
import React, { useEffect } from 'react'

function SignupLink(props) {

    const onNextBtn = () => {

        if (props.currentStep === 0) {
            const termCheck = document.querySelector('input#terms');
            const personCheck = document.querySelector('input#personInfo');
            /* check if all terms are agreed */
            if (!termCheck.checked) {
                alert('동의해주세요');
            } else {
                if (!personCheck.checked) {
                    alert('동의해주세요');
                } else {
                    window.location.href = "/auth/signup/info";
                }
            }
        } else if (props.currentStep === 1) {
            window.location.href = "/auth/signup/complete";
        } else {
            window.location.href = "/";
        }
    }

    const onBeforeBtn = () => {
        if (props.currentStep === 0) {
            window.location.href = "/";
        } else if (props.currentStep === 1) {
            window.location.href = "/auth/signup/terms";
        } else {
            window.location.href = "/auth/signup/info";
        }
    }

    const linkElement = () => {
        if (props.currentStep === 0) {
            return (
                <>
                    <button onClick={onBeforeBtn}><span>홈으로</span></button>
                    <button onClick={onNextBtn}><span>다음단계</span></button>
                </>
            );
        } else if (props.currentStep === 1) {
            return (
                <>
                    <button onClick={onBeforeBtn}><span>이전단계</span></button>
                    <button onClick={onNextBtn}><span>다음단계</span></button>
                </>
            );
        }else{
            return(
                <button style = {{
                    backgroundColor:'var(--color-main)',
                    color : 'white',
                    border : 'none'
                }}onClick={onNextBtn}><span>홈으로</span></button>
                );
        }
    }

    useEffect(() => {
        if (props.currentStep === 0) {
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
        } else if (props.currentStep === 1) {

        } else {

        }

    })

    return (
        <div className="signup__link">
            {linkElement()}
        </div>
    )
}

export default SignupLink
