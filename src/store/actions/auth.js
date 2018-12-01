import * as actionTypes from './actionTypes';
import axios from 'axios';
import { categories } from './category';
import { questions } from './question';

// axios.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     return Promise.resolve({
//         data: {
//             token: 123,
//         },
//         status: 200,
//         statusText: 'OK',
//         headers: {},
//         config: error.config
//     });
// });

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token, login) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        login
    }
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error
    }
};


export const logoutSuccess = (error) => {
    return {
        type: actionTypes.USER_LOGOUT,
    }
};

export const auth = (login, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/login_front/', {login, password})
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('login', login);
                dispatch(authSuccess(res.data.token, login));

                dispatch(categories())
                dispatch(questions())
            }).catch(err => {
                console.log(err);
                dispatch(authFailed(err))
            });
    }
};

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        dispatch(logoutSuccess());
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const login = localStorage.getItem('login');
        if(token) {
            dispatch(authSuccess(token, login));
        }

        dispatch(categories())
        dispatch(questions())
    }
};