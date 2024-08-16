import './styles.css';
import React from 'react';

const Rental = () => {
    return (
        <div className="context">
            <div className="contextTitle">대여사업</div>
            <hr className="titleSeparator"/>
            <div className="rental-container">
                <div className="rental-subTitle">대여사업 현황</div>
                <div className="rental-box"></div>
                <ul className="rental-button">
                    <li><a href="#대여사업"> > 대여사업 바로가기 </a></li>

                </ul>
            </div>
        </div>
    );
}

export default Rental;