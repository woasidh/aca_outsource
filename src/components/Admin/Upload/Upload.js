import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import NoticeUpload from './NoticeUpload/NoticeUpload'
  import VideoUpload from './VideoUpload/VideoUpload'
  import UnivInfoUpload from './UnivInfoUpload/index'
  import ScheduleUpload from './ScheduleUpload/index'

function UploadPage() {
    return (
        <Router>
            <Switch>
                <Route path = '/admin/upload/notice'>
                    <NoticeUpload/>
                </Route>
                <Route path = '/admin/upload/video'>
                    <VideoUpload/>
                </Route>
                <Route path = '/admin/upload/univInfo'>
                    <UnivInfoUpload/>
                </Route>
                <Route path = '/admin/upload/teacher'>
                    <div>
                        this is teacher page
                    </div>
                </Route>
                <Route path = '/admin/upload/schedule'>
                    <ScheduleUpload/>
                </Route>
            </Switch>
        </Router>
    )
}

export default UploadPage
