// src/pages/Announcement/AnnouncementDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const AnnouncementDetail = () => {
    const { id } = useParams();
    const [postDetails, setPostDetails] = useState(null);
    const [likeCount, setLikeCount] = useState(0); // 좋아요 수 상태
    const [liked, setLiked] = useState(false); // 좋아요 클릭 여부 상태
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(`http://ajouchong.com:8080/api/notice/${id}`);
                if (response.data.code === 1) {
                    setPostDetails(response.data.data);
                    setLikeCount(response.data.data.npUserLikeCnt); // 초기 좋아요 수 설정
                } else {
                    console.error('Error fetching post details:', response.data.message);
                }
            } catch (error) {
                console.error('API request error:', error);
            }
        };

        fetchPostDetails();
    }, [id]);

    const handleLike = async () => {
        if (!liked) {
            try {
                const response = await axios.post(`http://ajouchong.com:8080/api/notice/${id}/like`);
                if (response.data.code === 1) {
                    setLikeCount(likeCount + 1); // 좋아요 수 증가
                    setLiked(true); // 좋아요 클릭 상태로 변경
                } else {
                    console.error("Error liking the post:", response.data.message);
                }
            } catch (error) {
                console.error("API request error:", error);
            }
        }
    };


    if (!postDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-detail">
            <h2 className="post-title">{postDetails.npTitle}</h2>
            <hr className="titleSeparator"/>
            <div className="post-metadata">
                <span>작성일 | {new Date(postDetails.npCreateTime).toLocaleString()}</span>
                <span>조회수 | {postDetails.qpHitCnt}</span>
            </div>
            <p className="post-content">{postDetails.npContent}</p>


            <div className="post-images">
                {postDetails.imageUrls && postDetails.imageUrls.length > 0 ? (
                    postDetails.imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Image ${index + 1}`}/>
                    ))
                ) : (
                    <img src="/main/aurum_square.jpeg" alt="/main/aurum_square.jpeg"/>
                )}
            </div>
            <div className="like-section">
                <button onClick={handleLike} className="like-button" disabled={liked}>
                    <img
                        src={liked ? "/main/filled-heart.png" : "/main/heart.png"} // 좋아요 상태에 따라 이미지 변경
                        alt="좋아요"
                        className="like-icon"
                    />
                </button>
                <span className="like-count">{likeCount}</span>
            </div>

            <button onClick={() => navigate(-1)} className="back-button">목록으로 돌아가기</button>
        </div>
    );
};

export default AnnouncementDetail;
