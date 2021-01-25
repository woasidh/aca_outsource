import React from 'react'
import './Table.css'

function Table() {
    return (
        <div className="table">
            <div className="table__intro">
                <div className="table__counter">
                    <p className="table__counter">
                        Total
                        <span> 120건</span>
                        ,
                        <span> 1</span>
                        /120
                    </p>
                </div>
                <div className="table__intro__search">
                    <input type="text" placeholder="검색어를 입력해 주세요" id="search" name="name" />
                    <button><i className="fas fa-search"></i></button>
                </div>
            </div>
            <table>
                <colgroup>
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "60%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th colSpan="1">공지</th>
                        <th colSpan="1">제목</th>
                        <th colSpan="1">글쓴이</th>
                        <th colSpan="1">날짜</th>
                        <th colSpan="1">조회</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                    <tr>
                        <td>147</td>
                        <td>교습비 등 게시표</td>
                        <td>관리자</td>
                        <td>2020-10-12</td>
                        <td>5312</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
