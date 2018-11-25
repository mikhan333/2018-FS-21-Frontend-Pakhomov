import * as actionTypes from '../action';


const initialState = {
  user: {
    login: '',
    is_authorized: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        user: {
          login: action.login,
          is_authorized: true,
        },
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        user: {
          login: 'anonym',
          is_authorized: false,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;