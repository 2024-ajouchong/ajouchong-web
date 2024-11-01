import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const Announcement = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://ajouchong.com:8080/api/notice", {
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.data.code === 1) {
                    const fetchedPosts = response.data.data.map(post => ({
                        id: post.npost_id,
                        imageUrl: post.imageUrls[0] || '/aurum_square.jpeg',
                        title: post.npTitle,
                        date: new Date(post.npCreateTime).toLocaleDateString(),
                    }));
                    setPosts(fetchedPosts);
                } else {
                    console.error('Error fetching data:', response.data.message);
                }
            } catch (error) {
                console.error('API request error:', error);
            }
        };

        fetchPosts();
    }, []);

    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="context">
            <div className="contextTitle">공지사항</div>
            <hr className="titleSeparator" />

            <div className="posts-container">
                {currentPosts.map(post => (
                    <div className="post-box" key={post.id}>
                        <Link to={`/notice/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={post.imageUrl}
                                alt={post.title || '공지사항 이미지'}
                                className="post-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/main/aurum_square.jpeg';
                                }}
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                        <Link to={`/notice/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div
                                className="post-title"
                                style={{ cursor: 'pointer' }}
                            >
                                {post.title}
                            </div>
                        </Link>
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
        </div>
    );
};

export default Announcement;
