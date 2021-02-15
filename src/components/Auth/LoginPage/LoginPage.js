import React, { useEffect } from 'react'
import './LoginPage.css'
import axios from 'axios'
import Cookies from 'universal-cookie';

const cookie = new Cookies();

function LoginPage(props) {

    function loginBtn() {

        const idElm = document.querySelector('input#id');
        const pwdElm = document.querySelector('input#pwd');

        const payload = {
            id: idElm.value,
            pwd: pwdElm.value
        }

        axios.post('http://localhost:3001/auth/login', payload).then(response => {
            const success = response.data.success;
            const msg = response.data.msg;

            if (success !== true) {
                if (msg === 'noId') {
                    alert('일치하는 ID가 존재하지 않습니다');
                } else if (msg === 'pwdWrong') {
                    alert('비밀번호가 일치하지 않습니다');
                }
            } else {
                /* cookie.remove('kth_tk', {path :'/auth'});
                cookie.remove('w_authExp', {path : '/'}); */
                cookie.set('kth_tk', response.data.token, { path: '/', expires: new Date(Date.now() + 60 * 60 * 1000) });
                if(response.data.userData.isAdmin === true){
                    cookie.set('isAdmin', true, { path: '/', expires: new Date(Date.now() + 60 * 60 * 1000) });
                }
                window.location.href = '/';
                /* const localData = {
                    isLoggedIn: true,
                    userName: response.data.userData.userName,
                    isAdmin: response.data.userData.isAdmin,
                }
                localStorage.setItem('userData', JSON.stringify(localData));
                console.log(localStorage.getItem('userData')); */
            }
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
                        <a href="/auth/findId"><span>아이디 찾기</span></a>
                        <a href="/auth/findPwd"><span>비밀번호 찾기</span></a>
                        <a href="/auth/signup/terms"><span>회원가입</span></a>
                    </div>
                </div>
                <button onClick={loginBtn} className="loginBtn">로그인</button>
            </div>
        </div>
    )
}

export default LoginPage
