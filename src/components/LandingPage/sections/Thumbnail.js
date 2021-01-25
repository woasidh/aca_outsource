import React, { useEffect } from 'react'
import './Thumbnail.css'

function Thumbnail() {

    const createPopup = () => {
        const grades = ['고1', '고2', '고3', '특강'];
        const popUps = grades.map((grade, index) => {
            return (
                <div key = {index}className="thumb__popupBox">
                    <span>{grade}</span>
                    <div>시간표 보러가기</div>
                </div>
            );
        })
        return (popUps);
    }

    useEffect(() => {
        window.onload = function () {
            const imgContainer = document.querySelector('.imgContainer')
            const title = document.querySelector('.thumbnail__title');
            const desc = document.querySelector('.thumbnail__desc');
            const popUp = document.querySelectorAll('.thumb__popupBox');
            title.style.opacity = '1';
            setTimeout(() => {
                desc.style.opacity = '1';
                setTimeout(() => {
                    imgContainer.style.opacity = '0.5';
                    popUp.forEach((box) => {
                        box.style.opacity = '1';
                        box.classList.add('active');
                    })
                }, 1000)
            }, 1000)
        }
    })

    return (
        <div className="imgContainer">
            <div className="thumb__popup">
                {createPopup()}
            </div>
            <div className="textContainer">
                <div className="thumbnail__text">
                    <div className="thumbnail__title">
                        김태호과학학원
                    </div>
                    <div className="thumbnail__desc">
                        탄탄한 이론과 열정이 넘치는 강의를 만날 수 있습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail
