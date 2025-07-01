const initialState = {
    isLogin: false,
    username: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogin: true,
                username: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                isLogin: false,
                username: ''
            };
        default:
            return state;
    }
};

export default authReducer; 