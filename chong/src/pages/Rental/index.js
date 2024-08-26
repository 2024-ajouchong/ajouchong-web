import './styles.css';
import React from 'react';

const Rental = () => {
    return (
        <div className="context">
            <div className="contextTitle">대여사업</div>
            <hr className="titleSeparator"/>
            <div className="rental-container">
                <div className="rental-subTitle">물품 대여 현황</div>
                {/*<div className="rental-box"></div>*/}
                <iframe className="rental-box"
                    src="https://docs.google.com/spreadsheets/d/1IU3CiAEz99-MzoRr-IVcihwIItuqx-H_2bsv7n_SZU8/pubhtml?widget=true&amp;headers=false"></iframe>
                {/*<ul className="rental-button">*/}
                {/*    <li><a href="#대여사업"> > 대여사업 바로가기 </a></li>*/}

                {/*</ul>*/}
            </div>
        </div>
    );
}

export default Rental;