// Auth Actions
export const login = (username) => ({
    type: 'LOGIN',
    payload: username
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const setAuthLoading = (loading) => ({
    type: 'SET_AUTH_LOADING',
    payload: loading
});

export const clearAuthError = () => ({
    type: 'CLEAR_AUTH_ERROR'
}); 