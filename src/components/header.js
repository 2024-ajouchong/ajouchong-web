import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/chong/public/aurum_black.png" alt="로고" />
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
        </header>
    );
}

export default header;