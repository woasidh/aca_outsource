import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './CommunityPage.css'
import NoticePage from './NoticePage/NoticePage'
import UnivPage from './UnivPage/UnivPage'
import VideoPage from './VideoPage/VideoPage'
import NoticeContent from './NoticeContent/NoticeContent'
import NoticeModify from './NoticeModify/NoticeContent'

function CommunityPage() {

    const baseUrl = '/info/community';

    return (
        <Router>
            <Switch>
                <Route path={`${baseUrl}/notice/content/modify`}>
                    <NoticeModify />
                </Route>
                <Route path={`${baseUrl}/notice/content`}>
                    <NoticeContent />
                </Route>
                <Route path={`${baseUrl}/notice`}>
                    <div className="notice__title">
                        공지사항
                    </div>
                    <NoticePage />
                </Route>
                <Route path={`${baseUrl}/info`}>
                    <div className="notice__title">
                        입시정보
                    </div>
                    <UnivPage />
                </Route>
                <Route path={`${baseUrl}/video`}>
                    <div className="notice__title">
                        모의고사 동영상
                    </div>
                    <VideoPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default CommunityPage
