import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../../../utils/Table/Table.css'
import Cookies from 'universal-cookie';

const cookie = new Cookies();

function UnivPage() {

    const [isAdmin, setisAdmin] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [contentCount, setcontentCount] = useState(0);
    const [contents, setcontents] = useState([]);
    const [Pcontents, setPcontents] = useState([]);
    const [searchCount, setsearchCount] = useState(10);
    const [nonPriorityCount, setnonPriorityCount] = useState(0)
    const [refresh, setrefresh] = useState(0);

    useEffect(() => {


        axios.get('http://localhost:3001/univInfo/contents').then(response => {
            if (response.data.success === true) {
                console.log(response.data);
                const total = response.data.result.length + response.data.resultP.length;
                setcontentCount(total);
                setsearchCount(10-response.data.resultP.length);
                setnonPriorityCount(response.data.result.length)
                setcontents(response.data.result.reverse());
                setPcontents(response.data.resultP.reverse());
            } else {
                console.log('axios comm fail!');
            }
        })

        axios.post('http://localhost:3001/auth/isAdmin', { token: cookie.get('kth_tk') }).then(response => {
            if (response.data.success === true) {
                if (response.data.isAdmin === true) {
                    setisAdmin(true);
                } else {
                    setisAdmin(false);
                }
            } else {
                window.location.href = '/'
                alert('에러 발생')
            }
        })

    }, [])

    function genTableContent() {
        let resultCode = [];
        Pcontents.forEach((content, index) => {
            content && resultCode.push(
                <tr>
                    <td>공지</td>
                    <td style ={{position : 'relative'}}>
                        <a href={'/info/community/univInfo/content?id=' + content.univInfoId}>
                            {content.title}
                        </a>
                        {isAdmin && <><a href = {'/admin/modify/univInfo?id='+content.univInfoId} className = "changeBtn" style = {{position : 'absolute', right : '0'}}>
                            수정
                        </a>
                        <button onClick = {()=>{
                            axios.delete(`http://localhost:3001/univInfo/content/${content.univInfoId}`).then(res=>{
                                if(res.data.success === false){
                                    alert('오률발생');
                                }else{
                                    alert('삭제가 완료되었습니다.');
                                    window.location.href = '/info/community/univInfo';
                                }
                            })
                        }} className = "_deleteBtn" style = {{position : 'absolute', right : '55px'}}>
                            삭제
                        </button></>}
                    </td>
                    <td>{content.author}</td>
                    <td>{content.genDate.split('T')[0]}</td>
                    <td>{content.counter}</td>
                </tr>
            );
        })
        let j = 0;
        for (let i = searchCount * (currentPage - 1); i < searchCount * (currentPage); i++) {
            contents[i] && resultCode.push(
                <tr>
                    <td>{nonPriorityCount - ((currentPage - 1) * searchCount) - j}</td>
                    <td style ={{position : 'relative'}}>
                        <a href={'/info/community/univInfo/content?id=' + contents[i].univInfoId}>
                            {contents[i].title}
                        </a>
                        {isAdmin && <><a href = {'/admin/modify/univInfo?id='+contents[i].univInfoId} className = "changeBtn" style = {{position : 'absolute', right : '0'}}>
                            수정
                        </a>
                        <button onClick = {()=>{
                            axios.delete(`http://localhost:3001/univInfo/content/${contents[i].univInfoId}`).then(res=>{
                                if(res.data.success === false){
                                    alert('오률발생');
                                }else{
                                    alert('삭제가 완료되었습니다.');
                                    window.location.href = '/info/community/univInfo';
                                }
                            })
                        }} className = "_deleteBtn" style = {{position : 'absolute', right : '55px'}}>
                            삭제
                        </button></>}
                    </td>
                    <td>{contents[i].author}</td>
                    <td>{contents[i].genDate.split('T')[0]}</td>
                    <td>{contents[i].counter}</td>
                </tr>
            );
            j++;
        }
        return (
            resultCode
        );
    }

    function genPageSelector() {
        const total = parseInt((nonPriorityCount-1)/searchCount);
        let resultCode = [];
        for(let i =1;i<total+2;i++){
            if(i===currentPage){
                resultCode.push(<button onClick = {()=>{
                    setcurrentPage(i);
                }}><li key = {i} className="pageSelector__number active">{i}</li></button>);
            }else{
                resultCode.push(<button onClick = {()=>{
                    setcurrentPage(i);
                }}><li key = {i} className="pageSelector__number">{i}</li></button>);
            }
        }
        return (
            resultCode
        );
    }

    return (
        <>
            <div className="table">
                <div className="table__intro">
                    <div className="table__counter">
                    <p style={{ display: 'inline-block' }} className="table__counter">
                            Total
                        <span> {nonPriorityCount}건</span>
                        ,
                        <span> {currentPage} </span>
                        page
                        </p>
                        {isAdmin && <a className="notice__uploadBtn" href="/admin/upload/univInfo">업로드</a>}
                    </div>
                    <div className="table__intro__search">
                        <input type="text" placeholder="검색어를 입력해 주세요" id="search" name="name" />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <table>
                    <colgroup>
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "60%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colSpan="1">공지</th>
                            <th colSpan="1">제목</th>
                            <th colSpan="1">글쓴이</th>
                            <th colSpan="1">날짜</th>
                            <th colSpan="1">조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genTableContent()}
                    </tbody>
                </table>
            </div>
            <ul className="pageSelector">
                <button><div className="pageDirector"><i className="fas fa-angle-double-left"></i></div></button>
                {currentPage !== 1 ? <button><div className="pageDirector"><i className="fas fa-angle-left"></i></div></button> : <></>}
                {genPageSelector()}
                {currentPage === parseInt((nonPriorityCount-1)/searchCount)-1 ? <button><div className="pageDirector"><i className="fas fa-angle-right"></i></div></button> : <></>}
                <button><div className="pageDirector"><i className="fas fa-angle-double-right"></i></div></button>
            </ul>
        </>
    )
}

export default UnivPage
