import { useEffect, useState } from 'react';
import { boardDetail, boardLike } from './axios';
import './BoardDetail.css';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
    const [detail, setDetail] = useState({});
    const [likes, setLikes] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        boardDetail(id).then(res => {
            setDetail(res.data.data);
            setLikes(res.data.data.boardGood);
        });
    }, []);

    const handleLike = () => {
        boardLike(id);
        setLikes(likes + 1);
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
        </div>
    )
}
