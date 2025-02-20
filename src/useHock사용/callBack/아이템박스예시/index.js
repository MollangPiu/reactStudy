import { useState, useEffect,useCallback } from 'react';
import { apiItemList, apiItemGoodUp, apiItemDetail, apiItemSearch } from './api정보';
import 아이템리스트 from './아이템리스트';
import 아이템디테일 from './아이템디테일';
import 아이템검색 from './아이템검색';
import 아이템추가 from './아이템추가';

export default function 아이템박스() {

    const [item, setItem] = useState([]);
    const [itemDetail, setItemDetail] = useState({});

    const [카운트, set카운트] = useState(0);

    /** Item 목록 가져오기 */
    const getItem = useCallback(async () => {
        const res = await apiItemList();
        setItem(res.data.data);
    }, [setItem]);

    /** 검색 */
    const getSearch = async val => {
        const res = await apiItemSearch(val);
        setItem(res.data.data);
    }

    /** 좋아요 증가 */
    const onHandlerGoodUp = async (id) => {
        console.log("good 함수 실행");
        const res = await apiItemGoodUp(id);
        getItem();
    };

    /** 아이템 상세보기 */
    const getDetail = useCallback(async id => {
        console.log("detail 함수 실행");
        const res = await apiItemDetail(id);
        setItemDetail(res.data.data);
    }, [setItemDetail]);


    return (
        <div>
            <h1>아이템박스</h1>
            <button onClick={() => set카운트(카운트 + 1)}>카운트 증가</button>{카운트} 카운트클릭으로 랜더링파악하기
            <아이템추가 onHandlerRegist={getItem} />
            <아이템검색 onHandlerSearch={getSearch} />
            {/*<아이템리스트 list={item} onHandlerGoodUp={onHandlerGoodUp} onHandlerItemDetail={getDetail} />*/}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                height: '100%',
            }}>
                {item.map((item, index) => (
                    <아이템리스트 key={index} item={item} onHandlerGoodUp={onHandlerGoodUp} onHandlerItemDetail={getDetail} />
                ))}
            </div>
            {Object.keys(itemDetail).length > 0 && <아이템디테일 itemDetail={itemDetail} onHandlerClose={() => setItemDetail({})} />}
        </div>
    )
}
