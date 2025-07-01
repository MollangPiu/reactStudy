// 사용자 추가 액션
export const addUser = (name, age) => ({
    type: 'ADD_USER',
    payload: { id: Date.now(), name, age }
}); 