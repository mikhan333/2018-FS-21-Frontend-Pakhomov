import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { connect } from 'react-redux';

function getElementById(array, number) {
  return array.find(elem => {
    return elem.id === number
  });
}

function getElementsById(array, numbers) {
  const arr = [];
  numbers.map(number => arr.push(getElementById(array, number)));
  return arr;
}

class Category extends Component{
  render() {
    const category = getElementById(this.props.categories, Number(this.props.match.params.id));
    const question_id = category.question_id;
    const questions = getElementsById(this.props.questions, question_id);
    const list_quest = questions.map(item => {
      return <li key={item.id}><Link to={`${this.props.match.url}/${item.id}`}>{item.name}</Link></li>
    });
    return (
      <div>
        <h3>This is category: { category.name }</h3><br />
        <h2>Infa: { category.information }</h2>
        <hr />
        <ul>
          { list_quest }
        </ul>
        {/* <Link to={`${match.url}/answers`}>Questions on this topic</Link> */}
        {/* <Route path={`${match.path}/answers`} component={Answers} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.ctr.categories,
    questions: state.ctr.questions,
  };
};

export default connect(mapStateToProps)(Category);
// export function Quesrtions({match}){
//   return (
//     <div>
//       <h3>zero answers on {match.params.id} array.find(elem => elem.id === number)</h3>
//     </div>
//   );
// }