import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import CommunityPage from './sections/CommunityPage/CommunityPage'
import LecturePage from './sections/LecturePage/Lecturepage'
import TeacherPage from './sections/TeacherPage/TeacherPage'
import LeftNavbar from '../utils/LeftNavbar/LeftNavbar'
import './InfoPage.css'

function InfoPage() {

    const baseUrl = '/info';

    return (
        <div className="infoPage">
            <LeftNavbar />
            <Router>
                <div className="infoContainer">
                    <Switch>
                        <Route path={`${baseUrl}/lecture`}>
                            <LecturePage />
                        </Route>
                        <Route path={`${baseUrl}/teacher`}>
                            <TeacherPage />
                        </Route>
                        <Route path={`${baseUrl}/community`}>
                            <CommunityPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default InfoPage
