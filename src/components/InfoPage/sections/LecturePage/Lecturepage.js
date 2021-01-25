import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './Lecturepage.css';
import Table from '../../../utils/Table/Table'

function Lecturepage() {
    const baseUrl = '/info/lecture';

    return (
        <Router>
            <Switch>
                <Route path={`${baseUrl}/grade1`}>
                    <div className="lecture__title">
                        고1 강의시간표
                    </div>
                    <Table />
                </Route>
                <Route path={`${baseUrl}/grade2`}>
                    <div className="lecture__title">
                        고2 강의시간표
                    </div>
                    <Table />
                </Route>
                <Route path={`${baseUrl}/grade3`}>
                    <div className="lecture__title">
                        고3 강의시간표
                    </div>
                    <Table />
                </Route>
                <Route path={`${baseUrl}/grade4`}>
                    <div className="lecture__title">
                        중3 강의시간표
                    </div>
                    <Table />
                </Route>
                <Route path={`${baseUrl}/special`}>
                    <div className="lecture__title">
                        특강 강의시간표
                    </div>
                    <Table />
                </Route>
            </Switch>
        </Router>
    )
}

export default Lecturepage
