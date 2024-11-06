import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const RequireWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://ajouchong.com:8080/api/agora', {
                apTitle: title,
                apContent: content
            });

            if (response.data.code === 1) {
                setMessage('게시글이 게시되었습니다.');
                setTitle('');
                setContent('');
            } else {
                setMessage('게시글 작성에 실패했습니다.');
            }
        } catch (error) {
            console.error('API 요청 오류:', error);
            setMessage('게시글 작성 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="context">
            <div className="contextTitle">안건 상정 글 작성</div>
            <hr className="titleSeparator"/>

            <form onSubmit={handleSubmit} className="qna-form">
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="제목을 입력하세요"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="내용을 입력하세요"
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">게시</button>
            </form>

            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default RequireWrite;
