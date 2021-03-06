import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Cookies from 'universal-cookie'
import htmlToDraft from 'html-to-draftjs';
import Files from 'react-files'
import axios from 'axios'
import Checkbox from 'antd/lib/checkbox/Checkbox';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

const cookie = new Cookies();

const MyBlock = styled.div`
    .wrapper-class{
        margin: 0 auto;
    }
  .editor {
    height: 300px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;


function UnivInfoUpload() {

    const url = 'http://localhost:3001/';

    const [contentLength, setcontentLength] = useState(0);
    const [isChecked, setisChecked] = useState(false);
    const [counter, setcounter] = useState(0);
    const [Images, setImages] = useState([]);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());


    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        setcontentLength(draftToHtml(convertToRaw(editorState.getCurrentContent())).length);
    };

    function onImgChange(e) {
        const image = e[e.length - 1]
        console.log(image);
        const fd = new FormData();
        fd.append('image', image);
        axios.post('http://localhost:3001/image/upload', fd).then(res => {
            if (res.data.success === false) {
                alert('업로드 실패')
            } else {
                console.log('sex', res.data.filepath);
                Images.push(res.data.filepath);
                setcounter(counter + 1);
            }
        })
    }

    return (
        <div style={{ width: '900px', margin: 'auto' }}>
            <div className="upload__title">
                <span>제목</span>
                <input className="upload__input" style={{ marginLeft: '10px' }} type="text" id="title" name="title" required />
            </div>
            <Files style={{
                marginBottom: '20px'
            }} onChange={onImgChange}>
                <span style={{
                    border: '1px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>클릭해서 이미지를 업로드하세요!</span>
            </Files>
            {/* <img src= {url + Images} alt=""/> */}
            {Images.map((img, index) => {
                console.log(img);
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{
                            display: 'inline',
                            maxHeight: '70px',
                            maxWidth: '70px'
                        }} src={url + img} alt={url + Images} />
                        <span style={{
                            marginLeft: '30px'
                        }}>
                            {url + img}
                        </span>
                    </div>
                );
            })}
            <p style={{ fontSize: '13px' }} >글자 제한 수 : <span style={{ color: 'pink' }} >{contentLength}</span> / 1000</p>
            <MyBlock>
                <Editor
                    wrapperClassName="wrapper-class"
                    editorClassName="editor"
                    toolbarClassName="toolbar-class"
                    toolbar={{
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: false },
                    }}
                    placeholder="내용을 작성해주세요."
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                />
            </MyBlock>
            <Checkbox
                onChange={(e) => {
                    if (e.target.checked)
                        setisChecked(true)
                    else {
                        setisChecked(false)
                    }
                }}
                style={{ display: 'block' }}>
                공지로 띄우기
            </Checkbox>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
                <button className="upload__submitBtn"
                    onClick={() => {
                        const priority = isChecked ? 1 : 0;
                        const inputElm = document.querySelector('input.upload__input');
                        let content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
                        console.log(content);
                        content = content.replace(/\n/g, '');
                        console.log(content);
                        /* console.log(content[10].charCodeAt(0)) */
                        axios.get(`http://localhost:3001/auth/getId/?tk=${cookie.get('kth_tk')}`).then(res => {
                            if (!res.data.success) {
                                alert('세션이 만료되었습니다. 로그인을 다시해주세요');
                                window.location.href = '/auth/login'
                            } else {
                                const payload = {
                                    priority: priority,
                                    title: inputElm.value,
                                    author : res.data.id,
                                    content : content
                                }
                                console.log(payload);
                                axios.post('http://localhost:3001/univInfo/content', payload).then(res=>{
                                    console.log(res.data);
                                })
                            }
                        })
                    }}>업로드</button>
            </div>
        </div>
    )
}

export default UnivInfoUpload