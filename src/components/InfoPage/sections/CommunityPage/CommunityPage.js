import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Notice from './sections/Notice/Notice'
import Info from './sections/Info/Info'
import Video from './sections/Video/Video'
import './CommunityPage.css'
import Table from '../../../utils/Table/Table'

function CommunityPage() {

    const baseUrl = '/info/community';

    return (
        <Router>
            <Switch>
                <Route path={`${baseUrl}/notice`}>
                    <div className="notice__title">
                        공지사항
                    </div>
                    <Table />
                </Route>
                <Route path={`${baseUrl}/info`}>
                    <div className="notice__title">
                        입시정보
                    </div>
                    <Table />
                </Route>
                <Route path={`${baseUrl}/video`}>
                    <div className="notice__title">
                        모의고사 동영상
                    </div>
                    <Table />
                </Route>
            </Switch>
        </Router>
    )
}

export default CommunityPage
