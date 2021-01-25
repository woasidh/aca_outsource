import React from 'react'
import './Content.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImg1 from '../../../../images/carousel1.jpg'
import carouselImg2 from '../../../../images/carousel2.jpg'
import carouselImg3 from '../../../../images/carousel3.jpg'
import kakaoImg from '../../../../images/kakao.jpg'
import location from '../../../../images/location.jpg'
import kakaoIcon from '../../../../images/kakao.png'

function Content() {

    const getNoticeContent = () => {

        const arr = [0, 1, 2, 3, 4, 5, 6];
        const content = arr.map((element, index) => {
            return (<li key={index} className="row1__notice__item">
                <span className="row1__notice__item__title">2021학년도 전국모의고사 시행일정</span>
                <span className="row1__notice__item__date">2020-09-09</span>
            </li>);
        })
        return (content);
    }

    return (
        <div className="content">
            <div className="content__row1">
                <div className="row1__program">
                    <div className="row__title" id="program">
                        프로그램
                    </div>
                    <div className="carousel">
                        <Carousel>
                            <div>
                                <img src={carouselImg1} alt = "1"/>
                            </div>
                            <div>
                                <img src={carouselImg2} alt = "2" />
                            </div>
                            <div>
                                <img src={carouselImg3} alt = "3" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="row1__notice">
                    <div className="row__title" id="notice">
                        공지사항
                    </div>
                    <div className="row1__notice__container">
                        <ul className="row1__notice__items">
                            {getNoticeContent()}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content__row2">
                <div className="row2__contact">{/* 
                    <div className="row__title" id="contact">
                        연락처
                    </div> */}
                    <div className="row2__contact__content">
                        <img src={kakaoImg} alt="kakao" className="row2__contact__kakao" />
                        <div className="row2__contact__desc">
                            <div className="row2__contact__title">Contact us</div>
                            <div className="row2__contact__item" id = "email">
                                <i className="far fa-envelope"></i>
                                <span>kthac@naver.com</span>
                            </div>
                            <div className="row2__contact__item" id = "phone">
                                <i className="fas fa-phone-alt"></i>
                                <span>02-563-3123</span>
                            </div>
                            <div className="row2__contact__item" id = "kakao">
                                <img src={kakaoIcon} alt="KAKAOICON"/>
                                <span>Kakao ID.김태호학원</span>
                            </div>
                        </div>
                        {/*                         <div className="row2__contact__phoneNum">
                            02-563-3123
                        </div>
                        <div className="row2__contact__desc">
                            AM 09:00 ~ PM 18:00<br/>Kakao ID. 김태호과학학원
                        </div>
                        <div className="row2__contact__kakao">

                        </div> */}
                    </div>
                </div>
                <div className="row2__howToCome">
                    <div className="row__title" id="howToCome">
                        오시는길
                    </div>
                    <div className="row2__howToCome__content">
                        <img src={location} alt="map" />
                        <div className="row2__howToCome__desc">
                            주소 : 서울특별시 강남구 도곡로길 7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
