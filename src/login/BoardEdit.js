import { useState, useEffect } from 'react';
import { boardDetail, boardUpdate } from './axios';
import { useParams, useNavigate } from 'react-router-dom';
import './BoardDetail.css';

export default function BoardEdit() {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        boardDetail(id).then(res => {
            setDetail(res.data.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetail(prevDetail => ({
            ...prevDetail,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {};
        obj.boardId = id;
        obj.title = detail.title;
        obj.content = detail.content;
        obj.memberId = detail.memberId;
        boardUpdate(obj).then(res => {
            navigate(`/boardDetail/${id}`);
        });
    };

    return (
        <div className="board-detail-container">
            <h1 className="board-detail-title">게시판 수정</h1>
            <form onSubmit={handleSubmit}>
                <div className="board-detail-info">
                    <label>제목:</label>
                    <input type="text" name="title" value={detail.title || ''} onChange={handleChange} />
                </div>
                <div className="board-detail-info">
                    <label>내용:</label>
                    <textarea name="content" value={detail.content || ''} onChange={handleChange} />
                </div>
                <button type="submit" className="edit-button">저장</button>
            </form>
        </div>
    )
} 