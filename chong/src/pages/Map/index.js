import React, { useEffect } from 'react';
import './styles.css';

const Map = () => {

    useEffect(() => {

        if (window.kakao && window.kakao.maps) {
            var container = document.getElementById('map');
            var options = {
                center: new window.kakao.maps.LatLng(37.2832139, 127.0459682),
                level: 3
            };

            var map = new window.kakao.maps.Map(container, options);
            var markerPosition = new window.kakao.maps.LatLng(37.2832139, 127.0459682);
            var marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        } else {
            console.error("Kakao Maps API를 로드할 수 없습니다.");
        }
    }, []);

    return (
        <div className="context">
            <div className="contextTitle">오시는 길</div>
            <hr className="titleSeparator" />
            <div className="map-container">
            <div className="map" id="map" style={{ width: '400px', height: '400px' }}></div>
            <div className="map-info">
                <div className="map-subinfo">* 주소: 경기 수원시 원천동 아주대학교 신학생회관 208호</div>
                <div className="map-subinfo">* 연락처: 총학생회장 이홍서 010-5613-0359</div>
                <div className="map-subinfo">* 재실 시간: 10:00 ~ 16:30</div>
            </div>
            </div>

        </div>
    );
};

// export 구문을 함수 외부로 이동
export default Map;
