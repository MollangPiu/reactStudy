import { useEffect, useState } from 'react';
import { boardDetail } from './axios';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
    const [detail, setDetail] = useState({});

    const { id } = useParams();

    
    useEffect(() => {
        boardDetail(id).then(res => {
            setDetail(res.data.data);
        });
    }, []);

    return (
        <div>
            <h1>게시판 상세</h1>
            <h2>제목 : {detail.title}</h2>
            <h2>작성자 : {detail.memberId}</h2>
            <h2>작성일 : {detail.createdAt}</h2>
            <h2>내용 : {detail.content}</h2>
        </div>
    )
}
