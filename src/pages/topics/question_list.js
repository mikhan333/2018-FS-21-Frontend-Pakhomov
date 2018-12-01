import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class QuestionMain extends Component{
  updateCategories () {
    this.props.getQuestions();
  }

  render() {
    const questions = this.props.questions.map(item => {
      return <li key={item.id}><Link to={`${this.props.match.url}/${item.id}`}>{item.name}</Link></li>
    });
    return (
      <div>
        <h3>Questions:</h3>
        <hr />
        <ul>
          { questions }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.quest.questions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestion: () => dispatch(actions.questions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionMain);
