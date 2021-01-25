import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className="loginPage">
            <div className="loginBox">
                <div className="login__title">
                    로그인
                </div>
                <input
                    type="text"
                    placeholder="아이디"
                    id="id"
                    name="id" 
                    autocomplete="off"
                    />
                <input
                    type="password"
                    placeholder="비밀번호"
                    id="pwd"
                    name="pwd" />
                <div className="login__subMenu">
                    <div className="login__help">
                        <a href = "/auth/findId"><span>아이디 찾기</span></a>
                        <a href = "/auth/findPwd"><span>비밀번호 찾기</span></a>
                        <a href = "/auth/signup"><span>회원가입</span></a>
                    </div>
                </div>
                <button className="loginBtn">로그인</button>
            </div>
        </div>
    )
}

export default LoginPage
