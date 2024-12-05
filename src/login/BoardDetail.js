import { useEffect, useState } from 'react';
import { boardDetail } from './axios';
import './BoardDetail.css';
import { useParams, useNavigate } from 'react-router-dom';

export default function BoardDetail() {
    const [detail, setDetail] = useState({});
    const [likes, setLikes] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        boardDetail(id).then(res => {
            setDetail(res.data.data);
        });
    }, [id]);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleEdit = () => {
        navigate(`/boardEdit/${id}`);
    };

    return (
        <div className="board-detail-container">
            <h1 className="board-detail-title">게시판 상세</h1>
            <h2 className="board-detail-info"><span>제목 :</span> {detail.title}</h2>
            <h2 className="board-detail-info"><span>작성자 :</span> {detail.memberId}</h2>
            <h2 className="board-detail-info"><span>작성일 :</span> {detail.createdAt}</h2>
            <h2 className="board-detail-info"><span>내용 :</span> {detail.content}</h2>
            <div className="board-detail-likes">
                <button onClick={handleLike} className="like-button">추천</button>
                <span className="like-count">추천 수: {likes}</span>
            </div>
            <button onClick={handleEdit} className="edit-button">수정</button>
        </div>
    )
}
