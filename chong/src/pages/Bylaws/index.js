import './styles.css';
import React, { useState } from 'react';

const Bylaws = () => {
    const posts = [
        { id: 1, title: '총학생회 회칙', author: '관리자', date: '2024-08-17', views: '가결' },
        { id: 2, title: '총학생회 회칙', author: '관리자', date: '2024-08-16', views: '부결' },
        { id: 3, title: '세 번째 총학생회 회칙', author: '관리자', date: '2024-08-15', views: '가결' },
        { id: 4, title: '네 번째 총학생회 회칙', author: '관리자', date: '2024-08-14', views: '가결' },
        { id: 5, title: '다섯 번째 총학생회 회칙', author: '관리자', date: '2024-08-13', views: '부결' },
        { id: 6, title: '여섯 번째 총학생회 회칙', author: '관리자', date: '2024-08-12', views: '가결' },
        { id: 7, title: '일곱 번째 총학생회 회칙', author: '관리자', date: '2024-08-11', views: '부결' },
        { id: 8, title: '여덟 번째 총학생회 회칙', author: '관리자', date: '2024-08-10', views: '가결' },
        { id: 9, title: '아홉 번째 총학생회 회칙', author: '관리자', date: '2024-08-09', views: '가결' },
        { id: 10, title: '열 번째 총학생회 회칙', author: '관리자', date: '2024-08-08', views: '부결' },
    ];

    const postsPerPage = 9; // 한 페이지당 보여줄 게시물 수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

    // 현재 페이지에 해당하는 게시물 계산
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage); // 전체 페이지 수 계산

    // 페이지 변경 함수
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="context">
            <div className="contextTitle">세칙 및 회칙</div>
            <hr className="titleSeparator" />

            <table className="announcement-table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>첨부파일</th>
                </tr>
                </thead>
                <tbody>
                {currentPosts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="pagination">
                {/*<button*/}
                {/*    onClick={() => handleClick(currentPage - 1)}*/}
                {/*    disabled={currentPage === 1}*/}
                {/*>*/}
                {/*    이전*/}
                {/*</button>*/}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
                {/*<button*/}
                {/*    onClick={() => handleClick(currentPage + 1)}*/}
                {/*    disabled={currentPage === totalPages}*/}
                {/*>*/}
                {/*    다음*/}
                {/*</button>*/}
            </div>
        </div>
    );
};

export default Bylaws;
