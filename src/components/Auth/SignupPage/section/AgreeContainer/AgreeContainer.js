import React from 'react'
import './AgreeContainer.css'

function AgreeContainer() {
    return (
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
    )
}

export default AgreeContainer
