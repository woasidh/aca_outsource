import React, { useState, useEffect } from 'react'
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


function ScheduleModify() {

    const url = 'http://localhost:3001/';
    //HTML string -> draft
    const data = "<p><strong>안녕</strong></p><p>안녕안녕</p><p><strong>안녕안녕안녕.</strong></p>"
    const blocksFromHtml = htmlToDraft(data);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);


    const [contentLength, setcontentLength] = useState(0);
    const [isChecked, setisChecked] = useState(false);
    const [counter, setcounter] = useState(0);
    const [Images, setImages] = useState([]);
    const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));
    const [content, setcontent] = useState({});
    const [id, setid] = useState(0)


    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        setcontentLength(draftToHtml(convertToRaw(editorState.getCurrentContent())).length);
    };

    useEffect(() => {
        const id = window.location.search.split('=')[1];
        axios.get(`http://localhost:3001/schedule/content?id=${id}`).then(res => {
            if (res.data.success === false) {
                alert('오류 발생');
                window.location.href = '/'
            } else {
                console.log(res.data);
                setcontent(res.data);
                const blocksFromHtml = htmlToDraft(res.data.content);
                const { contentBlocks, entityMap } = blocksFromHtml;
                const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                setEditorState(EditorState.createWithContent(contentState))
                let inputElm = document.querySelector('input.upload__input');
                inputElm.value = res.data.title;
                console.log(typeof(res.data.priority));
                if(res.data.priority === 1){
                    const checkboxElm = document.querySelector('input[type=checkbox]');
                    checkboxElm.checked = true;
                    setisChecked(true)
                }else{
                    const checkboxElm = document.querySelector('input[type=checkbox]');
                    checkboxElm.checked = false;
                    setisChecked(false);
                }
            }
        })
    }, [])

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
                <input className="upload__input" style={{ marginLeft: '10px' }} /* placeholder={content.title}  */ type="text" id="title" name="title" required />
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
                /* defaultChecked={(content.priority === 1) ? true : false} */
                defaultChecked = {true}
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
                        const id = window.location.search.split('=')[1];
                        const payload = {
                            id : parseInt(id),
                            priority: priority,
                            title: inputElm.value,
                            content: content
                        }
                        console.log(payload);
                        axios.patch(`http://localhost:3001/schedule/content`, payload).then(res => {
                            if(res.data.success === false){
                                alert('오류 발생')
                                window.location.href = '/'
                            }else{
                                alert('수정완료되었습니다');
                                window.location.href = '/info/schedule'
                            }
                        })
                    }}>업데이트</button>
            </div>
        </div>
    )
}

export default ScheduleModify