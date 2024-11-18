import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GoogleOAuthCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // URL에서 authorization code 추출
        const parsedParams = new URLSearchParams(window.location.search);
        const authorizationCode = parsedParams.get("code");

        if (authorizationCode) {
            const fetchAccessToken = async () => {
                try {
                    // 백엔드로 authorization code를 전송해 access token을 요청
                    const response = await axios.post('http://localhost:5000/api/auth/google', {
                        code: authorizationCode,
                    });

                    if (response.data.success) {
                        alert("로그인 성공!");
                        // 성공 시 리디렉션
                        navigate("/");
                    } else {
                        alert("로그인 실패.");
                    }
                } catch (error) {
                    console.error("OAuth 처리 중 오류:", error);
                }
            };

            fetchAccessToken();
        } else {
            console.error("Authorization code가 없습니다.");
        }
    }, [navigate]);

    return <h2>로그인 처리 중...</h2>;
};

export default GoogleOAuthCallback;
