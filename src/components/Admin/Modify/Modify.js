import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import NoticeModify from './NoticeModify/index'


function UploadPage() {
    return (
        <Router>
            <Switch>
                <Route path = '/admin/modify/notice'>
                    <NoticeModify/>
                </Route>
                <Route path = '/admin/modify/teacher'>
                    <div>
                        this is teacher modify page
                    </div>
                </Route>
                <Route path = '/admin/modify/lecture'>
                    <div>
                        this is lecture modify page
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default UploadPage
