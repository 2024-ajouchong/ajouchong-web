import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './styles.css';

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
        "/main/main_8.JPG",
        "/main/main_7.jpg",
        // "/main/main_6.jpg",


    ];

    const notices = [
        {
            title: "공지사항 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            image:"/main/main_2.jpeg",
            date:"2024-08-03"

        },
        {
            title: "공지사항 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            image:"/main/main_4.jpg",
            date:"2024-08-05"

        },
        {
            title: "공지사항 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            image:"/main/main_8.jpg",
            date:"2024-08-06"

        },
        {
            title: "공지사항 4",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            image:"/main/main_10.jpeg",
            date:"2024-08-23"

        },
    ];

    useEffect(() => {
        const elements = document.querySelectorAll('.notice-card, .division-line, .card-title');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // 애니메이션 시작
                    observer.unobserve(entry.target); // 애니메이션 후에는 다시 관찰하지 않도록 설정
                }
            });
        }, {
            threshold: 0.1 // 요소가 10% 보일 때 애니메이션 시작
        });

        elements.forEach(element => observer.observe(element)); // 각 요소를 관찰 시작

        // Cleanup function to unobserve the elements on component unmount
        return () => {
            observer.disconnect();
        };
    }, []); // 빈 의존성 배열로 컴포넌트 마운트 시 한 번만 실행




    return (
        <div className="root">
            <div className="slider">
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


            <div className="card-wrapper">
                <div className="notices-container">
                    <div className="card-title">
                        <p>아우름 공지사항</p>
                        <span>다음 카드를 클릭하여 자세한 공지사항을 확인할 수 있습니다.</span>
                        <div className="division-line" id="division-line"></div>
                    </div>
                    {notices.map((notice, index) => (
                        <div className="notice-card" key={index}>
                            <img src={notice.image} alt={`Notice ${index}`} className="notice-image"/>
                            <h3>{notice.title}</h3>
                            <p>{notice.content}</p>
                            <span>{notice.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Main;
