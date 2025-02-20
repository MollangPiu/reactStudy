import { useState, useEffect } from 'react';
import { apiItemList, apiItemGoodUp, apiItemDetail, apiItemSearch } from './api정보';
import 아이템리스트 from './아이템리스트';
import 아이템디테일 from './아이템디테일';
import 아이템검색 from './아이템검색';
import 아이템추가 from './아이템추가';

export default function 아이템박스() {

    const [item, setItem] = useState([]);
    const [itemDetail, setItemDetail] = useState({});

    /** Item 목록 가져오기 */
    const getItem = async () => {
        const res = await apiItemList();
        console.log(res.data.data);
        setItem(res.data.data);
    }

    /** 검색 */
    const getSearch = async val => {
        const res = await apiItemSearch(val);
        console.log(res.data.data);
        setItem(res.data.data);
    }

    /** 좋아요 증가 */
    const onHandlerGoodUp = async (id) => {
        const res = await apiItemGoodUp(id);
        getItem();
    }

    /** 아이템 상세보기 */
    const getDetail = async id => {
        const res = await apiItemDetail(id);
        console.log(res.data.data);
        setItemDetail(res.data.data);
    }


    return (
        <div>
            <h1>아이템박스</h1>
            <아이템추가 onHandlerRegist={getItem} />
            <아이템검색 onHandlerSearch={getSearch} />
            <아이템리스트 list={item} onHandlerGoodUp={onHandlerGoodUp} onHandlerItemDetail={getDetail} />
            {Object.keys(itemDetail).length > 0 && <아이템디테일 itemDetail={itemDetail} onHandlerClose={() => setItemDetail({})} />}
        </div>
    )
}
