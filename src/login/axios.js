import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    },
});

/**
 * 아이디 중복 체크
 * @param {string} id 
 * @returns 
 */
export const findId = (id) => {
    return api.post('/member/findId', JSON.stringify({id: id}));
}

/**
 * 지역 코드 불러오기
 * @returns 
 */
export const areaAll = () => {
    return api.get('/area/list');
}

export const regist = (obj) => {
    return api.post('/member/regist', JSON.stringify(obj));
}

export default api;
