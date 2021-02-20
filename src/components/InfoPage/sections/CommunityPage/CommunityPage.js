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
import VideoContent from './VideoContent/VideoContent'
import UnivContent from './UnivContent/UnivContent'

function CommunityPage() {

    const baseUrl = '/info/community';

    return (
        <Router>
            <Switch>
                <Route path={`${baseUrl}/notice/content`}>
                    <NoticeContent />
                </Route>
                <Route path={`${baseUrl}/notice`}>
                    <div className="notice__title">
                        공지사항
                    </div>
                    <NoticePage />
                </Route>
                <Route path={`${baseUrl}/univInfo/content`}>
                    <UnivContent />
                </Route>
                <Route path={`${baseUrl}/univInfo`}>
                    <div className="notice__title">
                        입시정보
                    </div>
                    <UnivPage />
                </Route>
                <Route path={`${baseUrl}/video/content`}>
                    <VideoContent />
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
