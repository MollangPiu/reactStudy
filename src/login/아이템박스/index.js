import { useState, useEffect } from 'react';
import { itemList, itemGoodUp } from './api정보';
import 아이템리스트 from './아이템리스트';

export default function 아이템박스() {

    const [item, setItem] = useState([]);

    /** Item 목록 가져오기 */
    const getItem = async () => {
        const res = await itemList();
        console.log(res.data.data);
        setItem(res.data.data);
    }

    /** 좋아요 증가 */
    const onHandlerGoodUp = async (id) => {
        const res = await itemGoodUp(id);
        getItem();
    }

    useEffect(() => {
        getItem();
    }, []);



    return (
        <div>
            <h1>아이템박스</h1>
            <아이템리스트 list={item} onHandlerGoodUp={onHandlerGoodUp} />

        </div>
    )
}
