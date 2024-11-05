import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const PromotionDetail = () => {
    const { postId } = useParams();
    const [postDetails, setPostDetails] = useState(null);
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(`http://ajouchong.com:8080/api/partnership/${postId}`);
                if (response.data.code === 1) {
                    const post = response.data.data;
                    setPostDetails({
                        id: post.psPostId,
                        title: post.psTitle,
                        content: post.psContent,
                        userLikeCount: post.psUserLikeCnt,
                        hitCount: post.psHitCnt,
                        createTime: new Date(post.psCreateTime).toLocaleString(),
                        updateTime: new Date(post.psUpdateTime).toLocaleString(),
                        imageUrls: post.imageUrls.length ? post.imageUrls : ['/default-image.jpg']
                    });
                    setLikeCount(post.psUserLikeCnt);
                } else {
                    console.error('게시글 조회 오류:', response.data.message);
                }
            } catch (error) {
                console.error('API 요청 오류:', error);
            }
        };

        fetchPostDetails();
    }, [postId]);

    const handleLike = async () => {
        if (!liked) {
            try {
                const response = await axios.post(`http://ajouchong.com:8080/api/partnership/${postId}/like`);
                if (response.data.code === 1) {
                    setLikeCount(likeCount + 1);
                    setLiked(true);
                } else {
                    console.error("좋아요 오류:", response.data.message);
                }
            } catch (error) {
                console.error("API 요청 오류:", error);
            }
        }
    };

    if (!postDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-detail">
            <h2>{postDetails.title}</h2>
            <hr className="titleSeparator"/>
            <div className="post-metadata">
                <span>작성일 | {postDetails.createTime}</span>
                <span>조회수 | {postDetails.hitCount}</span>
                <span>좋아요 | {likeCount}</span>
            </div>
            <p>{postDetails.content}</p>
            <div className="post-images">
                {postDetails.imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Image ${index + 1}`} />
                ))}
            </div>
            <div className="like-section">
                <button onClick={handleLike} className="like-button" disabled={liked}>
                    <img
                        src={liked ? "/main/filled-heart.png" : "/main/heart.png"}
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

export default PromotionDetail;
