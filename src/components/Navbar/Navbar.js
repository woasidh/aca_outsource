import React from 'react'
import logo from '../../images/logo.gif'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navBar">
            <a href="http://localhost:3000" className="logo">
                <img src={logo} alt="logo" />
            </a>
            <div className="navbar__right">
                <ul className="navbar__right__menu">
                    <a href="/lecture">
                        <li className="navbar__right__menu__item">
                            <span>강의시간표</span>
                            <ul className="navbar__zoom" id = "schedule">
                                <a href="/"><li><span>고1</span></li></a>
                                <a href="/"><li><span>고2</span></li></a>
                                <a href="/"><li><span>고3</span></li></a>
                                <a href="/"><li><span>중3</span></li></a>
                                <a href="/"><li><span>특강</span></li></a>
                            </ul>
                        </li>
                    </a>
                    <a href="/teacher">
                        <li className="navbar__right__menu__item">
                            <span>강사진</span>
                            <ul className="navbar__zoom" id = "subject">
                                <a href="/"><li><span>국어</span></li></a>
                                <a href="/"><li><span>영어</span></li></a>
                                <a href="/"><li><span>수학</span></li></a>
                                <a href="/"><li><span>과학</span></li></a>
                                <a href="/"><li><span>사회</span></li></a>
                                <a href="/"><li><span>논술</span></li></a>
                            </ul>
                        </li>
                    </a>
                    <a href="/community/notice">
                        <li className="navbar__right__menu__item">
                            <span>커뮤니티</span>
                            <ul className="navbar__zoom" id = "community">
                                <a href="/community/notice"><li><span>공지사항</span></li></a>
                                <a href="/community/info"><li><span>입시정보</span></li></a>
                                <a href="/community/video"><li><span>모의고사 동영상</span></li></a>
                            </ul>
                        </li>
                    </a>
                    <a href="."><li className="navbar__right__menu__item"><span>오시는길</span></li></a>
                </ul>
                <div className="navbar__right__user">
                    <a href="."><span className="navbar__right__login">로그인</span></a>
                    <a href="."><span className="navbar__right__signup">회원가입</span></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
