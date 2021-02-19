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
                    <li key = '1' className = "leftBar__title" id = "class">
                        <span>
                            강의시간표
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-up"></i></button>
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-down"></i></button>
                        </span>
                        <ul className="leftBar__content">
                            <li key = '1'>고1</li>
                            <li key = '2'>고2</li>
                            <li key = '3'>고3</li>
                            <li key = '4'>중3</li>
                            <li key = '5'>특강</li>
                        </ul>
                    </li>
                    <li key = '2' className = "leftBar__title" id = "teach">
                        <span>
                            강사진
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-up"></i></button>
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-down"></i></button>
                        </span>
                        <ul className="leftBar__content">
                            <li key = '1'>국어</li>
                            <li key = '2'>영어</li>
                            <li key = '3'>수학</li>
                            <li key = '4'>과학</li>
                            <li key = '5'>사회</li>
                            <li key = '6'>논술</li>
                        </ul>
                    </li>
                    <li key = '3' className = "leftBar__title active" id = "community">
                        <span>
                            커뮤니티
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-up"></i></button>
                            <button onClick = {toggleHandler}><i className="fas fa-chevron-down"></i></button>
                        </span>
                        <ul className="leftBar__content">
                            <li key = '1'>공지사항</li>
                            <li key = '2'>입시정보</li>
                            <li key = '3'>모의고사 동영상</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNavbar