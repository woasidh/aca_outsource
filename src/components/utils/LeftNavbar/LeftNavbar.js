import React from 'react'
import './LeftNavbar.css'

function LeftNavbar() {

    const toggleHandler = (e)=>{
        const title = e.target.parentNode.parentNode.parentNode;
        const isOr = title.classList.contains('active');
        console.log(isOr);
        if(isOr){
            title.classList.remove('active');
            console.log('removed');
        }else{
            title.classList.add('active');
            console.log('added');
        }
    }

    return (
        <div className="leftNavContainer">
            <div className="leftNav">
                <ul className="leftBar__titles">
                    <li className = "leftBar__title" id = "class">
                        <span>
                            강의시간표
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-up"></i></button>
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-down"></i></button>
                        </span>
                        <ul className="leftBar__content">
                            <li>고1</li>
                            <li>고2</li>
                            <li>고3</li>
                            <li>중3</li>
                            <li>특강</li>
                        </ul>
                    </li>
                    <li className = "leftBar__title" id = "teach">
                        <span>
                            강사진
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-up"></i></button>
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-down"></i></button>
                        </span>
                        <ul className="leftBar__content">
                            <li>국어</li>
                            <li>영어</li>
                            <li>수학</li>
                            <li>과학</li>
                            <li>사회</li>
                            <li>논술</li>
                        </ul>
                    </li>
                    <li className = "leftBar__title active" id = "community">
                        <span>
                            커뮤니티
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-up"></i></button>
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-down"></i></button>
                        </span>
                        <ul className="leftBar__content">
                            <li>공지사항</li>
                            <li>입시정보</li>
                            <li>모의고사 동영상</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNavbar