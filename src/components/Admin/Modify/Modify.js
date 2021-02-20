import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import NoticeModify from './NoticeModify/index'
import VideoModify from './VideoModify/index'
import UnivInfoModify from './UnivInfoModify/index'
import ScheduleModify from './ScheduleModify/index'

function UploadPage() {
    return (
        <Router>
            <Switch>
                <Route path = '/admin/modify/notice'>
                    <NoticeModify/>
                </Route>
                <Route path = '/admin/modify/video'>
                    <VideoModify/>
                </Route>
                <Route path = '/admin/modify/univInfo'>
                    <UnivInfoModify/>
                </Route>
                <Route path = '/admin/modify/teacher'>
                    <div>
                        this is teacher modify page
                    </div>
                </Route>
                <Route path = '/admin/modify/schedule'>
                    <ScheduleModify/>
                </Route>
            </Switch>
        </Router>
    )
}

export default UploadPage
