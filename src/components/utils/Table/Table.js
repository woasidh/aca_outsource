import React from 'react'
import './Table.css'

function Table() {
    return (
        <div className="table">
            <div className="table__intro">
                <div className="table__counter">
                    <p className = "table__counter">
                        Total 
                        <span> 120건</span>
                        , 
                        <span> 1</span>
                        /120
                    </p>
                </div>
                <div className="table__intro__search">
                    <input type="text" placeholder = "검색어를 입력해 주세요" id="search" name="name"/>
                    <button><i className="fas fa-search"></i></button>
                </div>
                </div>
            </div>
    )
}

export default Table
