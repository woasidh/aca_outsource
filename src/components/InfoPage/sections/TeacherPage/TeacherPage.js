import React, { useState, useEffect } from 'react'
import './TeacherPage.css'
import axios from 'axios'


function TeacherPage() {

    const [type, settype] = useState('science');
    const [korean, setkorean] = useState('과학탐구')
    const [subtype, setsubtype] = useState('physics');
    const [science, setscience] = useState([]);
    const [math, setmath] = useState([]);
    const [english, setenglish] = useState([]);
    const [language, setlanguage] = useState([]);
    const [society, setsociety] = useState([]);
    const [essay, setessay] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/teacher/contents').then(response => {
            if (response.data.success === true) {
                console.log(response.data)
                setscience(response.data.result_science);
                setmath(response.data.result_math);
                setenglish(response.data.result_english);
                setlanguage(response.data.result_english);
                setsociety(response.data.result_society);
                setessay(response.data.result_essay);
            } else {
                console.log('axios comm failed')
            }
        })
    }, [])

    function setType(e) {
        switch (e.target.id) {
            case '1':
                settype('science');
                setkorean('과학탐구')
                break;
            case '2':
                settype('math');
                setkorean('수학')
                break;
            case '3':
                settype('english');
                setkorean('영어')
                break;
            case '4':
                settype('language');
                setkorean('언어')
                break;
            case '5':
                settype('society');
                setkorean('사회')
                break;
            case '6':
                settype('essay');
                setkorean('논술')
                break;
            default:
                break;
        }
    }

    function setSubType(e) {
        switch (e.target.id) {
            case "1":
                setsubtype('physics');
                break;
            case '2':
                setsubtype('life');
                break;
            case '3':
                setsubtype('chemistry');
                break;
            case '4':
                setsubtype('earth');
                break;
            default:
                break;
        }
    }

    function genCards() {
        console.log(type);

        let teachers = [];
        switch (type) {
            case 'science':
                let teachers_tmp = [];
                switch (subtype) {
                    case 'physics':
                        science.forEach((teacher, index) => {
                            if (teacher.subcategory === "physics") {
                                teachers_tmp.push(teacher);
                            }
                        })
                        break;
                    case 'life':
                        science.forEach((teacher, index) => {
                            if (teacher.subcategory === "life") {
                                teachers_tmp.push(teacher);
                            }
                        })
                        break;
                    case 'chemistry':
                        science.forEach((teacher, index) => {
                            if (teacher.subcategory === "chemistry") {
                                teachers_tmp.push(teacher);
                            }
                        })
                        break;
                    case 'earth':
                        science.forEach((teacher, index) => {
                            if (teacher.subcategory === "earth") {
                                teachers_tmp.push(teacher);
                            }
                        })
                        break;
                    default:
                        break;
                }
                teachers = teachers_tmp;
                break;
            case 'math':
                teachers = math;
                break;
            case 'english':
                teachers = english;
                break;
            case 'language':
                teachers = language;
                break;
            case 'society':
                teachers = society;
                break;
            case 'essay':
                teachers = essay;
                break;
            default:
                break;
        }

        const result = teachers.map((teacher, index) => {
            const careerArr = teacher.career.split('@@@');
            const careerCode = careerArr.map((career) => {
                return (
                    <li>- {career}</li>
                );
            })
            console.log(careerArr);
            return (
                <li className="teach__card">
                    <div className="teach__card__subject">
                        {korean}영역
                    </div>
                    <div className="teach__card__name">
                        {teacher.teacherName} {teacher.teacherName === '김태호' ? '원장님' : '선생님'}
                    </div>
                    <ul className="teach__card__career">
                        {careerCode}
                    </ul>
                    <div
                        style={{ backgroundImage: "url('http://www.xn--4k0bv97bp8glte35a.kr/bbs/img/minimap_2.gif')" }}
                        className="teach__card__avatar">

                    </div>
                    <div className="teach__card__msg">
                        프로필 보기
                    </div>
                    <div className="teach__card__effect"></div>
                </li>
            );
        })

        return (
            result
        );
    }

    return (
        <div className="teach">
            <div className="teach__title">
                선생님 소개
            </div>
            {/* <Button onClick = {
                ()=>{
                    console.log(type);
                }
            }>click me!</Button> */}
            <ul className="teach__subjects">
                <button onClick={setType}><li key="1" id="1" className={"teach__subject__item " + (type === 'science' ? 'active' : '')}>과학</li></button>
                <button onClick={setType}><li key="2" id="2" className={"teach__subject__item " + (type === 'math' ? 'active' : '')}>수학</li></button>
                <button onClick={setType}><li key="3" id="3" className={"teach__subject__item " + (type === 'english' ? 'active' : '')}>영어</li></button>
                <button onClick={setType}><li key="4" id="4" className={"teach__subject__item " + (type === 'language' ? 'active' : '')}>국어</li></button>
                <button onClick={setType}><li key="5" id="5" className={"teach__subject__item " + (type === 'society' ? 'active' : '')}>사회</li></button>
                <button onClick={setType}><li key="6" id="6" className={"teach__subject__item " + (type === 'essay' ? 'active' : '')}>논술</li></button>
            </ul>
            {type === 'science' ? <ul className="teach__subsubjects">
                <button onClick={setSubType}><li key="1" className={"teach__subsubject__item " + (subtype === 'physics' ? 'active' : '')} id="1">물리</li></button>
                <button onClick={setSubType}><li key="2" className={"teach__subsubject__item " + (subtype === 'life' ? 'active' : '')} id="2">생명과학</li></button>
                <button onClick={setSubType}><li key="3" className={"teach__subsubject__item " + (subtype === 'chemistry' ? 'active' : '')} id="3">화학</li></button>
                <button onClick={setSubType}><li key="4" className={"teach__subsubject__item " + (subtype === 'earth' ? 'active' : '')} id="4">지구과학</li></button>
            </ul> : <></>}
            <ul className="teach__container">
                {genCards()}
                {/* <li style = {{opacity : '0'}}className="teach__card">
                    <div className="teach__card__subject">
                        과학탐구영역
                    </div>
                    <div className="teach__card__name">
                        김태호 선생님
                    </div>
                    <ul className="teach__card__career">
                        <li>- 서울대 물리학과 졸업</li>
                        <li>- 현) 김태호학원 원장</li>
                    </ul>
                    <div
                        style={{ backgroundImage: `url(${avatar})` }}
                        className="teach__card__avatar">

                    </div>
                    <div className="teach__card__msg">
                        프로필 보기
                    </div>
                    <div className="teach__card__effect"></div>
                </li> */}
            </ul>
        </div>
    )
}

export default TeacherPage
