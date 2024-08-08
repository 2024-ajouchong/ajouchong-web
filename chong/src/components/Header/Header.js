import React, { useState }  from 'react';
import './Header.css';

const Header = () => {
    const [dropdown, setDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };
    document.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    return (
        <div>
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
                    <a href="/">
                        <img src="/aurum_black.png" alt="로고"/>
                    </a>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li className="menu-container"
                            onMouseEnter={() => handleMouseEnter('introduction')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="navtitle" href="#introduction">소개</a>
                            {dropdown === 'introduction' && (
                                <ul className="dropdown-container">
                                    <li><a href="#sub1">총학생회 소개</a></li>
                                    <li><a href="#sub2">공약 소개</a></li>
                                    <li><a href="#sub3">조직도</a></li>
                                    <li><a href="#sub4">인사말</a></li>
                                    <li><a href="#sub5">오시는 길</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('news')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="navtitle" href="#news">소식</a>
                            {dropdown === 'news' && (
                                <ul className="dropdown-container">
                                    <li><a href="#sub1">공지사항</a></li>
                                    <li><a href="#sub2">학사일정</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('communication')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="navtitle" href="#communication">소통</a>
                            {dropdown === 'communication' && (
                                <ul className="dropdown-container">
                                    <li><a href="#sub1">Q&A</a></li>
                                    <li><a href="#sub2">100인 안건 상정제</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('resources')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="navtitle" href="#resources">자료실</a>
                            {dropdown === 'resources' && (
                                <ul className="dropdown-container">
                                    <li><a href="#sub1">세칙 및 회칙</a></li>
                                    <li><a href="#sub2">회의록</a></li>
                                    <li><a href="#sub2">감사자료</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('student-welfare')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="navtitle" href="#student-welfare">학생복지</a>
                            {dropdown === 'student-welfare' && (
                                <ul className="dropdown-container">
                                    <li><a href="#sub1">제휴백과</a></li>
                                    <li><a href="#sub2">대여사업</a></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>
                <div className="button">
                    <a href="#log-in">Sign In</a>
                </div>
            </div>
        </header>

        </div>
    );
}

export default Header;