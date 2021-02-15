import React from 'react'
import './LandingPage.css'
import Thumbnail from './sections/Thumbnail'
import Content from './sections/Content/Content'

function LandingPage() {

    return (
        <div className="landingPage">
            <Thumbnail/>
            <Content/>
        </div>
    )
}

export default LandingPage
