import './styles.css';
import React, { useState } from 'react';
import axios from 'axios';

const QnAPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지

        try {
            const response = await axios.post('http://ajouchong.com:8080/api/qna', {
                qpTitle: title,
                qpContent: content
            });

            if (response.data.code === 1) {
                setMessage('게시글이 게시되었습니다.'); // 성공 메시지 설정
                setTitle(''); // 제목 입력 필드 초기화
                setContent(''); // 내용 입력 필드 초기화
            } else {
                setMessage('게시글 작성에 실패했습니다.'); // 실패 메시지 설정
            }
        } catch (error) {
            console.error('API 요청 오류:', error);
            setMessage('게시글 작성 중 오류가 발생했습니다.'); // 오류 메시지 설정
        }
    };

    return (
        <div className="context">
            <div className="contextTitle">QnA 작성</div>
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
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">게시</button>
            </form>

            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default QnAPost;
