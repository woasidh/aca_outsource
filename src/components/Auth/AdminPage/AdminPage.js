import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const MyBlock = styled.div`
    .wrapper-class{
        width: 50%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

function AdminPage() {
    const data = "<p><strong>안녕</strong></p><p>안녕안녕</p><p><strong>안녕안녕안녕.</strong></p>"
    const blocksFromHtml = htmlToDraft(data);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    /* const [editorState, setEditorState] = useState(EditorState.createEmpty()); */
    const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));

    const onEditorStateChange = (editorState) => {
        // editorState에 값 설정
        setEditorState(editorState);
    };
    // editorState의 현재 contentState 값을 원시 JS 구조로 변환시킨뒤, HTML 태그로 변환시켜준다.
    const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    /* const editorState = EditorState.createWithContent(contentState); */

    return (
        <div>
            <Editor
                // 에디터와 툴바 모두에 적용되는 클래스
                wrapperClassName="wrapper-class"
                // 에디터 주변에 적용된 클래스
                editorClassName="editor"
                // 툴바 주위에 적용된 클래스
                toolbarClassName="toolbar-class"
                // 툴바 설정
                toolbar={{
                    // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: false },
                }}
                placeholder="내용을 작성해주세요."
                // 한국어 설정
                localization={{
                    locale: 'ko',
                }}
                // 초기값 설정
                editorState={editorState}
                // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
                onEditorStateChange={onEditorStateChange}
            />
            <button onClick={console.log(editorToHtml)}>click me</button>
        </div>
    )
}

export default AdminPage
