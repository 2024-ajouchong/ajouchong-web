import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Promotion = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null); // State to handle the selected post details
    const postsPerPage = 9;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.post('http://ajouchong.com:8080/api/partnership', {
                    id: 'your_id',
                    password: 'your_password'
                });

                if (response.data.code === 1) {
                    const fetchedPosts = response.data.data.map(post => ({
                        id: post.psPostId,
                        imageUrl: post.imageUrls[0] || '/default-image.jpg',
                        title: post.psTitle,
                        date: new Date(post.psCreateTime).toLocaleDateString(),
                    }));
                    setPosts(fetchedPosts);
                } else {
                    console.error('데이터를 불러오는 중 오류 발생:', response.data.message);
                }
            } catch (error) {
                console.error('API 요청 오류:', error);
            }
        };

        fetchPosts();
    }, []);

    const fetchPostDetails = async (postId) => {
        try {
            const response = await axios.get(`http://ajouchong.com:20232/api/partnership/${postId}`);
            if (response.data.code === 1) {
                const postDetails = response.data.data;
                setSelectedPost({
                    id: postDetails.psPostId,
                    title: postDetails.psTitle,
                    content: postDetails.psContent,
                    userLikeCount: postDetails.psUserLikeCnt,
                    hitCount: postDetails.psHitCnt,
                    createTime: new Date(postDetails.psCreateTime).toLocaleString(),
                    updateTime: new Date(postDetails.psUpdateTime).toLocaleString(),
                    imageUrls: postDetails.imageUrls.length ? postDetails.imageUrls : ['/default-image.jpg']
                });
            } else {
                console.error('게시글 조회 오류:', response.data.message);
            }
        } catch (error) {
            console.error('API 요청 오류:', error);
        }
    };

    // 페이지네이션 계산
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 핸들러
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="context">
            <div className="contextTitle">제휴백과</div>
            <hr className="titleSeparator"/>

            {selectedPost ? (
                <div className="post-details">
                    <button onClick={() => setSelectedPost(null)} className="back-button">Back to list</button>
                    <h2>{selectedPost.title}</h2>
                    <div className="post-metadata">
                        <span>{selectedPost.createTime}</span>
                        <span>Likes: {selectedPost.userLikeCount}</span>
                        <span>Views: {selectedPost.hitCount}</span>
                    </div>
                    <p>{selectedPost.content}</p>
                    <div className="post-images">
                        {selectedPost.imageUrls.map((url, index) => (
                            <img key={index} src={url} alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className="posts-container">
                        {currentPosts.map(post => (
                            <div
                                className="post-box"
                                key={post.id}
                                onClick={() => fetchPostDetails(post.id)}
                            >
                                <img src={post.imageUrl} alt={post.title} className="post-image"/>
                                <div className="post-title">{post.title}</div>
                                <div className="post-date">{post.date}</div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Promotion;
