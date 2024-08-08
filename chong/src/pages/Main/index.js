import React from 'react';
import Slider from 'react-slick';
import styles from './styles.css';

const Main = (props, context) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    // 슬라이더에 표시할 이미지 배열
    const images = [
        "/main/main_10.jpeg",
        "/main/main_9.jpeg",
        "/main/main_7.jpg",
        "/main/main_6.jpg",
        "/main/main_3.jpg",

    ];

    return (
        <div className="root">
            <div className="box">
                <Slider className="topslider" {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`}/>
                        </div>
                    ))}
                </Slider>
                <div className="overlay">
                    <p>아주대학교 제 43대 총학생회 아우름</p>
                </div>
                <div className="title2">
                    <p>AJOU UNIV.</p>
                </div>
            </div>
        </div>

    );
};

export default Main;
