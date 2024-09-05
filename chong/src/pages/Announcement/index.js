import './styles.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Announcement = () => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    useEffect(() => {
        // Fetch data from the API
        axios.get('/notice') // Replace with the actual API endpoint
            .then(response => {
                const fetchedPosts = response.data.data.map(post => ({
                    id: post.npost_id,
                    imageUrl: post.imageUrls[0] || '/default-image.jpg', // Use a default image if none exists
                    title: post.npTitle,
                    date: new Date(post.npCreateTime).toLocaleDateString(), // Format the date
                }));
                setPosts(fetchedPosts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);
    // const posts = [
    //     { id: 1, imageUrl: '/main/main_1.jpg', title: '아우름 공지사항 1', date: '2024-08-16' },
    //     { id: 2, imageUrl: '/main/main_3.jpg', title: '아우름 공지사항 2', date: '2024-08-15' },
    //     { id: 3, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 3', date: '2024-08-15' },
    //     { id: 4, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 4', date: '2024-08-15' },
    //     { id: 5, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 5', date: '2024-08-15' },
    //     { id: 6, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 6', date: '2024-08-15' },
    //     { id: 7, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 7', date: '2024-08-15' },
    //     { id: 8, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 8', date: '2024-08-15' },
    //     { id: 9, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 9', date: '2024-08-15' },
    //     { id: 10, imageUrl: '/main/main_5.jpg', title: '아우름 공지사항 10', date: '2024-08-15' },
    //     // 추가 게시글 데이터
    // ];
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // 상태와 페이지네이션 변수
    // const [currentPage, setCurrentPage] = useState(1);
    // const postsPerPage = 9; // 한 페이지에 보여줄 게시글 수
    // const totalPosts = posts.length;
    // const totalPages = Math.ceil(totalPosts / postsPerPage);
    //
    // // 현재 페이지에 맞는 게시글 계산
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 핸들러
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="context">
            <div className="contextTitle">공지사항</div>
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
                        <img src={post.imageUrl} alt={post.title} className="post-image" />
                        <div className="post-title">{post.title}</div>
                        <div className="post-date">{post.date}</div>
                    </div>
                ))}
                {/*{currentPosts.map(post => (*/}
                {/*    <div className="post-box" key={post.id}>*/}
                {/*        <img src={post.imageUrl} alt={post.title} className="post-image"/>*/}
                {/*        <div className="post-title">{post.title}</div>*/}
                {/*        <div className="post-date">{post.date}</div>*/}
                {/*    </div>*/}
                {/*))}*/}
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

export default Announcement;