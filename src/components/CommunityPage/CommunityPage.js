import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Notice from './sections/Notice/Notice'
import Info from './sections/Info/Info'
import Video from './sections/Video/Video'
import LeftNavbar from './sections/LeftNavbar/LeftNavbar'
import './CommunityPage.css'

function CommunityPage() {

    const baseUrl = '/community';

    return (
        <div className="communityPage">
            <Router>
                <LeftNavbar />
                <Switch>
                    <Route path={`${baseUrl}/video`}>
                        <Video />
                    </Route>
                    <Route path={`${baseUrl}/notice`}>
                        <Notice />
                    </Route>
                    <Route path={`${baseUrl}/info`}>
                        <Info />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default CommunityPage
