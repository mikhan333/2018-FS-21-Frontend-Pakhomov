import * as actionTypes from '../actions/actionTypes';

const initialState = {
  questions: []
}


const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.QUESTION_GETALL)
      return {
        ...state,
        questions: action.questions
      };
    else
      return {
        ...state
      }
};


export default reducer;