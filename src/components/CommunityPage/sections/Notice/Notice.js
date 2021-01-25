import React from 'react'
import './Notice.css'
import '../../../utils/Table/Table'
import Table from '../../../utils/Table/Table'

function Notice() {
    return (
        <div className = "noticePage">
            <div className="notice__title">
                공지사항
            </div>
            <Table/>
        </div>
    )
}

export default Notice
