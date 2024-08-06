import React from 'react';
import styles from './styles.css';
const Footer = (props) => (
    <footer className="footer">
        <div className="main">
            <div className="mainleft">
                <div className="column">
                    <span className="title">AJOU UNIV</span>
                    <img src="/chong/src/pub/aurum_black.png" alt="로고"/>
                </div>
            </div>
            <div className="mainright">
                <div className="column">
                    <div className="info">
                        <span className="infotext">
                        <a href="/policy">개인정보처리방침</a>
                        </span>
                        <span className="space">|</span>
                        <span className="infotext">
                        <a href="/policy/termsofservice">이용약관</a>
                        </span>
                        <span className="space"></span>
                    </div>
                </div>
                <div className="column">
                    <span className="address">
                    16399) 경기도 수원시 영통구 월드컵로 206 아주대학교 신학생회관 208호
                    총학생회실
                    </span>
                </div>
                <div className="column">
                    <span className="copyright">
                    COPYRIGHT © Ajou University Council. All Rights Reserved.
                    </span>
                </div>
            </div>

        </div>
    </footer>
);

export default Footer;