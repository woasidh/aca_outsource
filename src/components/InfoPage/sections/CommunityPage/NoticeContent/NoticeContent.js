import React, { useEffect, useState } from 'react'
import './NoticeContent.css'
import axios from 'axios'

function NoticeContent(props) {

    const [author, setauthor] = useState('');
    const [content, setcontent] = useState('');
    const [genDate, setgenDate] = useState('');
    const [title, settitle] = useState('');
    const [isNext, setisNext] = useState(false);
    const [nextId, setnextId] = useState(0);
    const [nextTitle, setnextTitle] = useState('');
    const [isPre, setisPre] = useState(false);
    const [preId, setpreId] = useState(0);
    const [preTitle, setpreTitle] = useState('');

    useEffect(() => {
        const id = window.location.search.split('=')[1];
        axios.get(`http://localhost:3001/notice/content?id=${id}`).then(res => {
            if (res.data.success !== true) {
                alert('오류 발생');
                window.location.href = '/'
            } else {
                console.log(res.data);
                const data = res.data;
                setauthor(data.author);
                setcontent(data.content);
                settitle(data.title);
                const arr = data.genDate.split('-');
                const arr2 = arr[2].split('T');
                let arr3 = [];
                arr3.push(arr[0]);
                arr3.push(arr[1]);
                arr3.push(arr2[0]);
                setgenDate(arr3);
            }
        })

        axios.get(`http://localhost:3001/notice/next?id=${id}`).then(res => {
            if (res.data.success !== true) {
                alert('오류 발생');
                window.location.href = '/'
            } else {
                if (res.data.msg) {
                    setisNext(false);
                } else {
                    console.log(res.data.id, res.data.title)
                    setisNext(true);
                    setnextId(res.data.id);
                    setnextTitle(res.data.title);
                }
            }
        })

        axios.get(`http://localhost:3001/notice/pre?id=${id}`).then(res => {
            if (res.data.success !== true) {
                alert('오류 발생');
                window.location.href = '/'
            } else {
                if (res.data.msg) {
                    setisPre(false);
                } else {
                    console.log(res.data.id, res.data.title)
                    setisPre(true);
                    setpreId(res.data.id);
                    setpreTitle(res.data.title);
                }
            }
        })

    }, [])

    return (
        <div style={{ width: '100%' }}>
            <p className="noticeCnt__main">공지사항</p>
            <div className="noticeCnt__titleBar">
                <span>{title}</span>
                <span>{genDate[0]}.{genDate[1]}.{genDate[2]}</span>
            </div>
            <div style={{ marginBottom: '30px' }} className="noticeCnt__author">
                {author}
            </div>
            <div style={{
                textAlign: 'center'
            }} className="noticeCnt__content">
                <div dangerouslySetInnerHTML={{ __html: content }}>
                </div>
            </div>
            <a href="/info/community/notice" className="noticeCnt__listBox">
                <div className="noticeCnt__listInnerBox">
                    <i class="fas fa-bars"></i>
                    <span>목록</span>
                </div>
            </a>
            {isNext ? <div className="noticeCnt__Box" id="pre">
                <div className="noticeCnt__Box__left">
                    <i class="fas fa-angle-up"></i>
                    <span>다음글</span>
                </div>
                <div className="noticeCnt__Box__right" d>
                    <span><a href = {'/info/community/notice/content?id='+ nextId}>{nextTitle}</a></span>
                </div>
            </div> : <></>}
            {isPre ? <div className="noticeCnt__Box" id="pre">
                <div className="noticeCnt__Box__left">
                    <i class="fas fa-angle-up"></i>
                    <span>이전글</span>
                </div>
                <div className="noticeCnt__Box__right" d>
                    <span><a href = {'/info/community/notice/content?id='+ preId}>{preTitle}</a></span>
                </div>
            </div> : <></>}
        </div>
    )
}

export default NoticeContent
