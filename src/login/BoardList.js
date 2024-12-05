import { useEffect, useState } from 'react';
import { boardList } from './axios';
import './BoardList.css';
import { useNavigate } from 'react-router-dom';

export default function BoardList() {

    const [list, setList] = useState([]);

    const navigate = useNavigate();

    useEffect(()=> {
        boardList().then(res => {
            console.log(res);
            if(res.data.code === '200') {
                setList(res.data.data);
            }
        });
    }, []);

    return (
        <div className="board-list-container">
            <h1 className="board-list-header">게시판리스트</h1>
            <table className="board-list-table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {list.slice(0, 10).map((item, index) => {
                        return <tr key={index}
                            onClick={() => {
                                navigate(`/boardDetail/${item.boardIdx}`);
                            }}
                        >
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.memberId}</td>
                            <td>{item.createdAt}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}