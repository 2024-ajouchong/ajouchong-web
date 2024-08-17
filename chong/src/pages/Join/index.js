import './styles.css';
import React from 'react';

const Join = () => {
    return (
        <div className="context">
            <div className="contextTitle">AJOU UNIV</div>
            <img className="signinlogo" src="/aurum_black.png" alt="Ajou University Logo"/>

            <div className="signin-container">
                <input type="text" placeholder="e-mail" className="signin-input"/>
                <input type="password" placeholder="password" className="signin-input"/>
                <button className="signin-button">Sign In</button>
            </div>

            <div className="findpw">
                <a href="/join">회원가입</a>
                <span className="space">|</span>
                <a href="/password">비밀번호 찾기</a>

            </div>


        </div>
    );
}

export default Join;