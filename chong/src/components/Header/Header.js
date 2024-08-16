import React, {  useState, useEffect }  from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

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

    const getNavtitle = () => {
        switch (location.pathname) {
            case '/about':
                return '총학생회 소개';
            case '/promise':
                return '공약 소개';
            case '/organization':
                return '조직도';
            case '/map':
                return '오시는 길';
            case '/greeting':
                return '인사말';

            default:
                return '';
        }
    };
    const currentPath = location.pathname;

    // const isMainPage = currentPath === '/';
    // const isIntroductionActive = ['/about', '/promise', '/organization', '/map'].includes(currentPath);
    // const isNewsActive = ['/announcement', '/planning'].includes(currentPath);
    // const isResourcesActive = ['/bylaws', '/proceeding', '/audit'].includes(currentPath);
    // const isCommunicationActive = ['/qna', '/require'].includes(currentPath);
    // const isWelfareActive = ['/promotion', '/rental'].includes(currentPath);

    const navtitle = getNavtitle();
    const isMainPage = location.pathname === '/';
    const isIntroductionActive = ['/introduction/about', '/introduction/promise', '/introduction/organization', '/introduction/map'].includes(location.pathname);
    const isNewsActive = ['/news/announcement',  '/news/planning'].includes(location.pathname);
    const isResourcesActive = ['/resources/bylaws',  '/resources/proceeding','/resources/audit'].includes(location.pathname);
    const isCommunicationActive = ['/communication/qna', '/communication/require'].includes(location.pathname);
    const isWelfareActive = ['/welfare/promotion', '/welfare/rental'].includes(location.pathname);

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
                        <li><a href="/sitemap">사이트맵</a></li>
                        <span className="dot"> • </span>
                        <li><a href="/login">로그인</a></li>
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
                            <div  className={`navtitle ${isIntroductionActive ? 'active' : ''}`}  href="/introduction">소개</div>
                            {dropdown === 'introduction' && (
                                <ul className="dropdown-container">
                                    <li><a href="/introduction/about">총학생회 소개</a></li>
                                    <li><a href="/introduction/promise">공약 소개</a></li>
                                    <li><a href="/introduction/organization">조직도</a></li>
                                    <li><a href="/introduction/map">오시는 길</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('news')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`navtitle ${isNewsActive ? 'active' : ''}`} href="/news">소식</div>
                            {dropdown === 'news' && (
                                <ul className="dropdown-container">
                                    <li><a href="/news/announcement">공지사항</a></li>
                                    <li><a href="/news/planning">학사일정</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('communication')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`navtitle ${isCommunicationActive ? 'active' : ''}`} href="/communication">소통</div>
                            {dropdown === 'communication' && (
                                <ul className="dropdown-container">
                                    <li><a href="/qna">Q&A</a></li>
                                    <li><a href="/require">100인 안건 상정제</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('resources')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`navtitle ${isResourcesActive ? 'active' : ''}`} href="/resources">자료실</div>
                            {dropdown === 'resources' && (
                                <ul className="dropdown-container">
                                    <li><a href="/bylaws">세칙 및 회칙</a></li>
                                    <li><a href="/proceeding">회의록</a></li>
                                    <li><a href="/audit">감사자료</a></li>
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('student-welfare')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`navtitle ${isWelfareActive ? 'active' : ''}`} href="/student-welfare">학생복지</div>
                            {dropdown === 'student-welfare' && (
                                <ul className="dropdown-container">
                                    <li><a href="/promotion">제휴백과</a></li>
                                    <li><a href="/rental">대여사업</a></li>
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
            {/*{!isMainPage && <Breadcrumb />}*/}
            {/*{location.pathname !== '/' && <Breadcrumb navtitle={navtitle} />}*/}
        </div>
    );
}

export default Header;