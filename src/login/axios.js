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

export const login = (obj) => {
    return api.post('/member/login', JSON.stringify(obj));
}

export const boardList = (obj) => {
    return api.get('/board/list', {params: obj});
}

export const boardDetail = (id) => {
    return api.get('/board/find', {params: {boardId: id}});
}

export const boardLike = (id) => {
    return api.post('/board/good', JSON.stringify({boardId: id}));
}

export const boardUpdate = (obj) => {
    return api.post('/board/modify', JSON.stringify(obj));
}

export const boardDelete = (id) => {
    return api.post('/board/remove', JSON.stringify({boardId: id}));
}

export default api;
