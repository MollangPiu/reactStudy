import api from '../../ax/axSetting';

/** Item 목록 가져오기 */
export const itemList = () => {
    return api.get('item/list');
}

/** 좋아요 증가 */
export const itemGoodUp = (itemIdx) => {
    return api.get(`item/good`, {params: {
        itemIdx: itemIdx
    }});
}

