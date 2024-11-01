// src/pages/Qna/QnaDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const QnaDetail = () => {
    const { postId } = useParams(); // URL에서 postId를 추출
    const [postDetails, setPostDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                console.log("Fetching post details for ID:", postId); // postId 확인
                const response = await axios.get(`http://ajouchong.com:8080/api/qna/${postId}`);
                console.log("API Response:", response.data); // API 응답 확인

                if (response.data.code === 1) {
                    setPostDetails(response.data.data);
                    console.log("Post details set successfully:", response.data.data); // postDetails 확인
                } else {
                    console.error('게시글 조회 오류:', response.data.message);
                }
            } catch (error) {
                console.error('API 요청 오류:', error);
            }
        };

        if (postId) {
            fetchPostDetails(); // postId가 존재할 때만 API 요청 실행
        }
    }, [postId]);

    if (!postDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-detail">
            <h2 className="post-title">{postDetails.qpTitle}</h2>
            <hr className="titleSeparator"/>
            <div className="post-metadata">
                <span>작성일 | {new Date(postDetails.qpCreateTime).toLocaleString()}</span>
                <span>조회수 | {postDetails.qpHitCnt}</span>
            </div>
            <p className="post-content">{postDetails.qpContent}</p>

            {/* 상태와 답변 표시 */}
            <div className="post-answer">
                <strong>상태:</strong> {postDetails.replied ? '답변 완료' : '대기 중'}
                <p>{postDetails.answer || '답변이 아직 없습니다.'}</p>
            </div>

            <button onClick={() => navigate(-1)} className="back-button">목록으로 돌아가기</button>
        </div>
    );
};

export default QnaDetail;
