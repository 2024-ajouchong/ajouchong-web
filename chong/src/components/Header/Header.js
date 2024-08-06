import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            {/*<div className="upper">*/}
            {/*    <nav className="upnav-menu">*/}
            {/*        <ul>*/}
            {/*            <li><a href="#introduction">아주대학교</a></li>*/}
            {/*            <li><a href="#news">포탈</a></li>*/}
            {/*            <li><a href="#communication">아주BB</a></li>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</div>*/}

            <div className="lower">
                <div className="logo">
                    <img src="../../pub/aurum_black.png" alt="로고"/>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#introduction">소개</a></li>
                        <li><a href="#news">소식</a></li>
                        <li><a href="#communication">소통</a></li>
                        <li><a href="#resources">자료실</a></li>
                        <li><a href="#student-welfare">학생복지</a></li>
                    </ul>
                </nav>
                <div className="button">
                    <a href="#log-in">Sign In</a>
                </div>
            </div>
        </header>
    );
}

export default Header;