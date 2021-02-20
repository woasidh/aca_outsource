import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.gif'
import './Navbar.css'
import Cookies from 'universal-cookie';

const cookie = new Cookies();

function Navbar() {

    const [isAuth, setisAuth] = useState(false);
    const [isAdmin, setisAdmin] = useState(false);

    useEffect(() => {
        console.log(isAuth);
        console.log(isAdmin);
        cookie.get('kth_tk') ? setisAuth(true) : setisAuth(false);
        (cookie.get('isAdmin') === 'true') ? setisAdmin(true) : setisAdmin(false);
    }, [])

    function genRightMenu() {
        console.log(isAuth);
        console.log(isAdmin);
        if (isAuth) {
            if (isAdmin) {
                return (
                    <>
                        <a href="/auth/myPage"><span className="navbar__right__login">내정보</span></a>
                        <button onClick={onLogoutBtn} style={{ font: 'inherit' }}><span className="navbar__right__signup">로그아웃</span></button>
                    </>
                );
            } else {
                return (
                    <>
                        <a href="/auth/myPage"><span className="navbar__right__login">내정보</span></a>
                        <button onClick={onLogoutBtn} style={{ font: 'inherit' }}><span className="navbar__right__signup">로그아웃</span></button>
                    </>
                );
            }
        } else {
            return (
                <>
                    <a href="/auth/login"><span className="navbar__right__login">로그인</span></a>
                    <a href="/auth/signup/terms"><span className="navbar__right__signup">회원가입</span></a>
                </>
            );
        }
    }

    function onLogoutBtn() {
        cookie.remove('kth_tk', { path: '/' });
        cookie.remove('isAdmin', { path: '/' });
        window.location.href = '/';
    }

    return (
        <div style ={{zIndex : '100'}} className="navBar">
            <a href="http://localhost:3000" className="logo">
                <img src={logo} alt="logo" />
            </a>
            <div className="navbar__right">
                <ul className="navbar__right__menu">
                    <a href="/info/schedule/grade1">
                        <li key = '1' className="navbar__right__menu__item">
                            <span>강의시간표</span>
                            <ul className="navbar__zoom" id="schedule">
                                <a href="/info/schedule/grade1"><li key = "1"><span>고1</span></li></a>
                                <a href="/info/schedule/grade2"><li key = "2"><span>고2</span></li></a>
                                <a href="/info/schedule/grade3"><li key = "3"><span>고3</span></li></a>
                                <a href="/info/schedule/grade4"><li key = "4"><span>중3</span></li></a>
                                <a href="/info/schedule/special"><li key = "5"><span>특강</span></li></a>
                            </ul>
                        </li>
                    </a>
                    <a href="/info/teacher">
                        <li key = '1' className="navbar__right__menu__item">
                            <span>강사진들들</span>
                            <ul className="navbar__zoom" id="subject">
                                <a href="/"><li key = '1'><span>국어</span></li></a>
                                <a href="/"><li key = '2'><span>영어</span></li></a>
                                <a href="/"><li key = '3'><span>수학</span></li></a>
                                <a href="/"><li key = '4'><span>과학</span></li></a>
                                <a href="/"><li key = '5'><span>사회</span></li></a>
                                <a href="/"><li key = '6'><span>논술</span></li></a>
                            </ul>
                        </li>
                    </a>
                    <a href="/info/community/notice">
                        <li key = '1' className="navbar__right__menu__item">
                            <span>커뮤니티</span>
                            <ul className="navbar__zoom" id="community">
                                <a href="/info/community/notice"><li key = '1'><span>공지사항</span></li></a>
                                <a href="/info/community/univInfo"><li key = '2'><span>입시정보</span></li></a>
                                <a href="/info/community/video"><li key = '3'><span>모의고사 동영상</span></li></a>
                            </ul>
                        </li>
                    </a>
                    <a href="."><li key = '1' className="navbar__right__menu__item"><span>오시는길</span></li></a>
                </ul>
                <div className="navbar__right__user">
                    {genRightMenu()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
