import React from 'react'
import './InfoContainer.css'

function InfoContainer() {
    return (
        <div className="signup__infoContainer">
            <div className="info__title">회원정보 입력</div>
            <div className="infoBox" id="info__id">
                <div className="signup__required"></div>
                <label htmlFor="id">아이디</label>
                <input type="text" id="id" name="id" autoComplete ="off">
                </input>
                <div className="signup__idCheck">
                    사용할 수 없습니다
                </div>
            </div>
            <div className="infoBox" id="info__pwd">
                <div className="signup__required"></div>
                <label htmlFor="pwd">비밀번호</label>
                <input type="password" id="pwd" name="pwd" autoComplete ="off"></input>
                <div className="signup__idCheck">
                    사용할 수 없습니다
                </div>
            </div>
            <div className="infoBox" id="info__pwdConfirm">
                <div className="signup__required"></div>
                <label htmlFor="pwdConfirm">비밀번호확인</label>
                <input type="text" id="pwdConfirm" name="pwdConfirm" autoComplete ="off"/>
                <div className="signup__idCheck">
                    비밀번호가 일치하지 않습니다
                </div>
            </div>
            <div className="infoBox" id="info__name">
                <div className="signup__required"></div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" autoComplete ="off"/>
            </div>
            <div className="infoBox" id="info__email">
                <div className="signup__required"></div>
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" autoComplete ="off"/>
            </div>
        </div>
    )
}

export default InfoContainer
