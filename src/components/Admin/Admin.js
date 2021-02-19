import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Upload from './Upload/Upload'
  import Modify from './Modify/Modify'

function Admin() {
    return (
        <Router>
            <Switch>
                <Route path = '/admin/upload/'>
                    <Upload/>
                </Route>
                <Route path = '/admin/modify/'>
                    <Modify/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Admin
