import './styles.css';
import React, { useState } from 'react';

const Require = () => {
    const posts = [
        { id: 1, title: '첫 번째 공지사항', author: '관리자', date: '2024-08-17', views: '가결' },
        { id: 2, title: '두 번째 공지사항', author: '관리자', date: '2024-08-16', views: '부결' },
        { id: 3, title: '세 번째 공지사항', author: '관리자', date: '2024-08-15', views: '가결' },
        { id: 4, title: '네 번째 공지사항', author: '관리자', date: '2024-08-14', views: '가결' },
        { id: 5, title: '다섯 번째 공지사항', author: '관리자', date: '2024-08-13', views: '부결' },
        { id: 6, title: '여섯 번째 공지사항', author: '관리자', date: '2024-08-12', views: '가결' },
        { id: 7, title: '일곱 번째 공지사항', author: '관리자', date: '2024-08-11', views: '부결' },
        { id: 8, title: '여덟 번째 공지사항', author: '관리자', date: '2024-08-10', views: '가결' },
        { id: 9, title: '아홉 번째 공지사항', author: '관리자', date: '2024-08-09', views: '가결' },
        { id: 10, title: '열 번째 공지사항', author: '관리자', date: '2024-08-08', views: '부결' },
    ];
    const postsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="context">
            <div className="contextTitle">100인 안건 상정제</div>
            <hr className="titleSeparator"/>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="search-input"
                />
                <button className="search-button">검색</button>
            </div>

            <table className="announcement-table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                        <td>{post.date}</td>
                        <td>{post.views}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    이전
                </button>
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    다음
                </button>
            </div>

        </div>
    );
}

export default Require;