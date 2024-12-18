import './styles.css';
import React from 'react';

const Rental = () => {
    return (
        <div className="context">
            <div className="contextTitle">대여사업</div>
            <hr className="titleSeparator"/>
            <div className="rental-container">

                <button
                    className="rental-button"
                    onClick={() => window.open("https://forms.gle/pyzHeDk8bQfnJGk76", "_blank")}
                >
                    대여사업 바로가기
                </button>
                {/*<div className="rental-subTitle">물품 대여 현황</div>*/}
                {/*<div className="rental-box"></div>*/}
                <iframe className="rental-box"
                        src="https://docs.google.com/spreadsheets/d/1IU3CiAEz99-MzoRr-IVcihwIItuqx-H_2bsv7n_SZU8/pubhtml?widget=true&amp;headers=false"></iframe>
                {/*<ul className="rental-button">*/}


                {/*</ul>*/}
                <div className="rental-info">
                    <div id="retal-title">총학생회 대여 사업 안내</div>
                    <hr className="tableSeparator"/>
                    <img className="rentalimg" src="/main/대여사업.jpg"/>
                    <img className="rentalimg" src="/main/대여사업2.jpg"/>

                </div>

            </div>
        </div>
    );
}

export default Rental;