import React, { useEffect } from 'react'
import './LoginPage.css'
import axios from 'axios'
import Cookies from 'js-cookie';


function LoginPage() {

    function loginBtn(){
        
        const idElm = document.querySelector('input#id');
        const pwdElm = document.querySelector('input#pwd');

        const payload = {
            id : idElm.value,
            pwd : pwdElm.value
        }

        /* axios.post('http://localhost:5000/auth/login', payload).then(response=>{
            console.log(response);
            console.log(Cookies.get('ab'));
        }) */

        axios.get('ec2-13-125-234-233.ap-northeast-2.compute.amazonaws.com:3000').then(response=>{
            console.log(response);
        })
    }

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
                    autoComplete="off"
                    />
                <input
                    type="password"
                    placeholder="비밀번호"
                    id="pwd"
                    name="pwd"
                    autoComplete="off" />
                <div className="login__subMenu">
                    <div className="login__help">
                        <a href = "/auth/findId"><span>아이디 찾기</span></a>
                        <a href = "/auth/findPwd"><span>비밀번호 찾기</span></a>
                        <a href = "/auth/signup/terms"><span>회원가입</span></a>
                    </div>
                </div>
                <button onClick = {loginBtn} className="loginBtn">로그인</button>
            </div>
        </div>
    )
}

export default LoginPage
