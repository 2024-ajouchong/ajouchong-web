import React, { useEffect } from 'react';
import './styles.css';

const Map = () => {
    useEffect(() => {
        const loadKakaoMap = () => {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.2832139, 127.0459682), // 중심 좌표
                level: 3, // 확대 레벨
            };
            const map = new window.kakao.maps.Map(container, options);
            const markerPosition = new window.kakao.maps.LatLng(37.2832139, 127.0459682);
            const marker = new window.kakao.maps.Marker({ position: markerPosition });
            marker.setMap(map);
        };

        // Kakao Maps API 스크립트 로드
        if (!window.kakao || !window.kakao.maps) {
            const script = document.createElement('script');
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=42fccd709a486ca4c67c989badd72a15&autoload=false`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                window.kakao.maps.load(loadKakaoMap); // 스크립트 로드 후 맵 생성
            };
            document.head.appendChild(script);
        } else {
            loadKakaoMap();
        }
    }, []);

    return (
        <div className="context">
            <div className="contextTitle">오시는 길</div>
            <hr className="titleSeparator" />
            <div className="map-container">
                <div className="map" id="map" ></div>
                <div className="map-info">
                    <div className="map-subinfo">* 주소: 경기 수원시 원천동 아주대학교 신학생회관 208호</div>
                    <div className="map-subinfo">* 연락처: 총학생회장 이홍서 010-5613-0359</div>
                    <div className="map-subinfo">* 재실 시간: 10:00 ~ 16:30</div>
                </div>
            </div>
        </div>
    );
};

export default Map;
