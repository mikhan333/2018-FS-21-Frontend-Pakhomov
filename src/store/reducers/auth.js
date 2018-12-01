import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    error: null,
    loading: false,
    user: {
        login: '',
    }
};

const authStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null,
    };
};

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.token,
        user: {
            ...state.user,
            login: action.login
        },
        error: null,
        loading: false,
    }
};

const authFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
};

const logoutSuccess = (state, action) => {
    return {
        ...initialState,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAILED: return authFail(state, action);
        case actionTypes.USER_LOGOUT: return logoutSuccess(state, action);
        default: return state;
    }
};
export default reducer;