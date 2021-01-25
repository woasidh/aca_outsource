import React from 'react'
import './LeftNavbar.css'

function LeftNavbar() {
    return (
        <div className="leftNavContainer">
            <div className="leftNav">
                <div className="leftBar__title">
                    커뮤니티
            </div>
                <ul className="leftBar__content">
                    <li>공지사항</li>
                    <li>입시정보</li>
                    <li>모의고사 동영상</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNavbar