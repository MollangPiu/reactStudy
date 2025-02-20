import axios from 'axios';

/** 서버 연동 설정 */
const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 1000
});

/** Item 목록 가져오기 */
export const apiItemList = () => {
    return api.get('item/list');
}

/** 검색 */
export const apiItemSearch = (search) => {
    return api.get('item/findByName', {params: {
        name: search
    }});
}

/** 좋아요 증가 */
export const apiItemGoodUp = (itemIdx) => {
    return api.get(`item/good`, {params: {
        itemIdx: itemIdx
    }});
}

/** 아이템 상세검색 */
export const apiItemDetail = (itemIdx) => {
    return api.get(`item/find`, {params: {
        itemIdx: itemIdx
    }});
}

/** 아이템 추가 */
export const apiItemRegist = (obj) => {
    return api.post(`item/regist`, JSON.stringify(obj));
}

