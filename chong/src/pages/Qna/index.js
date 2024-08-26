import './styles.css';
import React, { useState } from 'react';

const Qna = () => {
    const posts = [
        { id: 1, title: '첫 번째 공지사항', author: '관리자', date: '2024-08-17', views: '대기중' },
        { id: 2, title: '두 번째 공지사항', author: '관리자', date: '2024-08-16', views: '대기중' },
        { id: 3, title: '세 번째 공지사항', author: '관리자', date: '2024-08-15', views: '답변완료' },
        { id: 4, title: '네 번째 공지사항', author: '관리자', date: '2024-08-14', views: '답변완료' },
        { id: 5, title: '다섯 번째 공지사항', author: '관리자', date: '2024-08-13', views: '대기중' },
        { id: 6, title: '여섯 번째 공지사항', author: '관리자', date: '2024-08-12', views: '답변완료' },
        { id: 7, title: '일곱 번째 공지사항', author: '관리자', date: '2024-08-11', views: '답변완료' },
        { id: 8, title: '여덟 번째 공지사항', author: '관리자', date: '2024-08-10', views: '대기중' },
        { id: 9, title: '아홉 번째 공지사항', author: '관리자', date: '2024-08-09', views: '답변완료' },
        { id: 10, title: '열 번째 공지사항', author: '관리자', date: '2024-08-08', views: '답변완료' },
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
            <div className="contextTitle">Q&A</div>
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
                    <th>날짜</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody>
                {currentPosts.map(post => ( // 현재 페이지에 해당하는 게시물만 표시
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

                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}

            </div>

        </div>
    );
}

export default Qna;
