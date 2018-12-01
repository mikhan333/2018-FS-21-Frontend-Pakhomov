import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: []
}

//  const initialState = {
//   categories: [
//     { id: 1, name: 'Category1', information: 'smth1', question_id: [1, 2, 3, 4] },
//     { id: 2, name: 'Category2', information: 'smth2', question_id: [5, 6, 7, 8] },
//     { id: 3, name: 'Category2', information: 'smth3', question_id: [1, 4] },
//     { id: 4, name: 'Category2', information: 'smth4', question_id: [1, 2, 3, 4, 5, 6, 7, 8] },
//     { id: 5, name: 'Category2', information: 'smth5', question_id: [5] },
//   ],
//   questions: [
//     { id: 1, name: 'Question1', information: 'smth_quest1', categories_id: [1, 3, 4] },
//     { id: 2, name: 'Question2', information: 'smth_quest2', categories_id: [1, 4] },
//     { id: 3, name: 'Question3', information: 'smth_quest3', categories_id: [1, 4] },
//     { id: 4, name: 'Question4', information: 'smth_quest4', categories_id: [1, 3, 4] },
//     { id: 5, name: 'Question5', information: 'smth_quest5', categories_id: [2, 4, 5] },
//     { id: 6, name: 'Question6', information: 'smth_quest6', categories_id: [2, 4] },
//     { id: 7, name: 'Question7', information: 'smth_quest7', categories_id: [2, 4] },
//     { id: 8, name: 'Question8', information: 'smth_quest8', categories_id: [2, 4] },
//   ],
// };


const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CATEGORY_REMOVE)
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.id),
      };
    if (action.type === actionTypes.CATEGORY_ADD)
      return {
        ...state,
        categories: [...state.categories, {
          id: '',
          name: '',
          information: '',
          categories_id: '',
        }]
      };
    if (action.type === actionTypes.CATEGORY_GETALL)
      return {
        ...state,
        categories: action.categories
      };
    else
      return {
        ...state
      }
};


export default reducer;