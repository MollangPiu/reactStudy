import React, { useEffect, useState } from 'react';
import { boardList } from './axios';
import './BoardList.css';
import { useNavigate } from 'react-router-dom';

export default function BoardList() {


    const [list, setList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [searchType, setSearchType] = useState('title');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigate = useNavigate();

    function search() {
        let obj = {};
        if(searchType === 'created') {
            obj.created = keyword;
        }
        if(searchType === 'title') {
            obj.keyword = keyword;
        }
        boardList(obj).then(res => {
            console.log(res);
            if(res.data.code === '200') {
                setList(res.data.data);
            }
        });
    }




    useEffect(()=> {


        boardList().then(res => {
            console.log(res);
            if(res.data.code === '200') {
                setList(res.data.data);
            }
        });

    }, []);

    useEffect(() => {
        search();
    }, [searchType, keyword]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % list.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [list]);

    return (
        
        <div className="board-list-container">

            <div className="board-list-area">
                <h1 className="board-list-header">게시판리스트</h1>
                
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="title">제목</option>
                    <option value="created">작성자</option>
                </select>
                <input type="text" placeholder="검색어를 입력하세요" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <input type="button" value="검색" onClick={search} />
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

            <div className="boardCard-area">
                <span>제목 영역</span>
            </div>
            <div className="board-detail-area">
                
            </div>
            <div className="slideshow">
                {list.map((item, index) => (
                    <img
                        key={index}
                        src={item.imageUrl} // Assuming each item has an imageUrl property
                        className={index === currentImageIndex ? 'fade-in' : 'fade-out'}
                        alt={item.title}
                    />
                ))}
            </div>
        </div>
    )
}