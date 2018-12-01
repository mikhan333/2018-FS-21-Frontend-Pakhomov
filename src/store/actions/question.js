import * as actionTypes from './actionTypes';
import axios from 'axios';


export const questionGetAll = (questions) => {
    return {
        type: actionTypes.QUESTION_GETALL,
        questions
    }
};

export const questions = () => {
    return dispatch => {
        axios.get('http://localhost:8000/questions/question_list_front/').then(res => {
          console.log(res);
          const questions_json = JSON.parse(res.data.questions);
          const questions = questions_json.reduce((mas, question) => { return [...mas, {
              id: question.pk,
              author: question.fields.author,
              name: question.fields.name,
              categories: question.fields.categories,
              data: question.fields.data,
            }] }, []);
          console.log(questions);
          dispatch(questionGetAll(questions))
        })
    }
};
