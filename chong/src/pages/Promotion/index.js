import './styles.css';
import React, { useState } from 'react';

const Promotion = () => {
    const posts = [
        { id: 1, imageUrl: '/main/main_1.jpg', title: '아우름 제휴 1', date: '2024-08-16' },
        { id: 2, imageUrl: '/main/main_3.jpg', title: '아우름 제휴 2', date: '2024-08-15' },
        { id: 3, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 3', date: '2024-08-15' },
        { id: 4, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 4', date: '2024-08-15' },
        { id: 5, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 5', date: '2024-08-15' },
        { id: 6, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 6', date: '2024-08-15' },
        { id: 7, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 7', date: '2024-08-15' },
        { id: 8, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 8', date: '2024-08-15' },
        { id: 9, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 9', date: '2024-08-15' },
        { id: 10, imageUrl: '/main/main_5.jpg', title: '아우름 제휴 10', date: '2024-08-15' },
        // 추가 게시글 데이터
    ];

    // 상태와 페이지네이션 변수
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9; // 한 페이지에 보여줄 게시글 수
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // 현재 페이지에 맞는 게시글 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 핸들러
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="context">
            <div className="contextTitle">제휴백과</div>
            <hr className="titleSeparator"/>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="search-input"
                />
                <button className="search-button">검색</button>
            </div>

            <hr className="contentSeparator"/>

            <div className="posts-container">
                {currentPosts.map(post => (
                    <div className="post-box" key={post.id}>
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
        </div>
    );
}

export default Promotion;
