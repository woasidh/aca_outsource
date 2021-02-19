import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import NoticeUpload from './NoticeUpload/NoticeUpload'

function UploadPage() {
    return (
        <Router>
            <Switch>
                <Route path = '/admin/upload/notice'>
                    <NoticeUpload/>
                </Route>
                <Route path = '/admin/upload/teacher'>
                    <div>
                        this is teacher page
                    </div>
                </Route>
                <Route path = '/admin/upload/lecture'>
                    <div>
                        this is lecture page
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default UploadPage
