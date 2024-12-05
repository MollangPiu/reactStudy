import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './BoardWrite.css';

function WritePost() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && content) {
            // Handle post submission logic here
            console.log({ title, author, content, createdAt: new Date().toLocaleString() });
            setTitle('');
            setAuthor('');
            setContent('');
        }
    };

    const handleCancel = () => {
        navigate('/boardList'); // Redirect to BoardList
    };

    return (
        <div className="write-post-container">
            <h2>글 쓰기</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="title-input" // Add class for styling
                    />
                </div>
                <div>
                    <label>작성자:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>내용:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div className="button-group">
                    <button type="button" onClick={handleSubmit}>작성</button>
                    <button type="button" onClick={handleCancel}>취소</button>
                </div>
            </form>
        </div>
    );
}

export default WritePost;