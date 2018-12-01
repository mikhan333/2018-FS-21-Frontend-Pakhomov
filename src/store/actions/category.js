import * as actionTypes from './actionTypes';
import axios from 'axios';


export const categoryGetAll = (categories) => {
    return {
        type: actionTypes.CATEGORY_GETALL,
        categories
    }
};

export const categories = () => {
    return dispatch => {
        axios.get('http://localhost:8000/categories/category_list_front/').then(res => {
          console.log(res);
          const categories_json = JSON.parse(res.data.categories);
          const categories = categories_json.reduce((mas, category) => { return [...mas, { id: category.pk, name: category.fields.name }] }, []);
          console.log(categories);
          dispatch(categoryGetAll(categories))
        })
    }
};
