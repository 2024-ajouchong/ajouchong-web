import React, {  useState, useEffect }  from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [dropdown, setDropdown] = useState(null);
    const location = useLocation();

    const handleMouseEnter = (menu) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };
    useEffect(() => {
        const header = document.querySelector('.header');

        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        // Apply the scrolled class if not on the main page
        if (location.pathname !== '/') {
            header.classList.add('scrolled');
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);
    // document.addEventListener('scroll', function () {
    //     const header = document.querySelector('.header');
    //     if (window.scrollY > 0) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    //
    //     // Apply the scrolled class if not on the main page
    //     if (location.pathname !== '/') {
    //         header.classList.add('scrolled');
    //     }
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     // Cleanup event listener on unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [location]);

// });
    return (
        <div>
        <header className="header">
            <div className="upper">
                <nav className="upnav-menu">
                    <ul>
                        <li><a href="#https://www.ajou.ac.kr/">아주대학교</a></li>
                        <span className="dot"> • </span>
                        <li><a href="https://mportal.ajou.ac.kr/">아주대 포탈</a></li>
                        <span className="dot"> • </span>
                        <li><a href="https://eclass2.ajou.ac.kr/">아주BB</a></li>
                    </ul>
                </nav>
                <nav className="upnav-menu2">
                    <ul>
                        <li><a href="#map">사이트맵</a></li>
                        <span className="dot"> • </span>
                        <li><a href="#login">로그인</a></li>
                    </ul>
                </nav>

            </div>

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
                            <div className="navtitle" href="/introduction">소개</div>
                            {dropdown === 'introduction' && (
                                <ul className="dropdown-container">
                                    <li><a href="/about">총학생회 소개</a></li>
                                    <li><a href="/promise">공약 소개</a></li>
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
                            <div className="navtitle" href="#news">소식</div>
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
                            <div className="navtitle" href="#communication">소통</div>
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
                            <div className="navtitle" href="#resources">자료실</div>
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
                            <div className="navtitle" href="#student-welfare">학생복지</div>
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