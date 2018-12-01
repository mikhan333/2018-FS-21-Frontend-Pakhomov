/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import QuestionForm from './containers/CreateQuestion/CreateQuestion';
import CategoryForm from './containers/CreateCategory/CreateCategory';
import Layout from './components/Layout/Layout';
import { HomePage } from './pages/home-page/index';
import ProfilePage from './pages/user/profile';
// import LoginPage from './pages/user/login';
import RegisterPage from './pages/user/register';
import Categories from './pages/topics/categories';
import Questions from './pages/topics/question_list';

import Auth from './containers/Auth/Auth';
import {connect} from "react-redux";
import * as actions from './store/actions';


class App extends Component {
  componentDidMount() {
     this.props.onTryAutoLogin();
  }
  render() {
    let routes = (
        <Layout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* <Route path="/categories" component={Categories} /> */}
              <Route path='/login' exact component={Auth} />
                <Redirect to='/'/>
            </Switch>
        </Layout>
    );

    if(this.props.isAuthed) {
      routes = (
          <Layout>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/question_create" component={QuestionForm} />
                <Route path="/questions" component={Questions} />
                <Route path="/category_create" component={CategoryForm} />
                <Route path="/categories" component={Categories} />
                <Route path="/profile" component={ProfilePage} />
                {/* <Route path="/login" component={LoginPage} /> */}
                {/* <Route path="/registration" component={RegisterPage} /> */}
                {/* <Route path='/login' exact component={Auth} /> */}
                  <Redirect to='/'/>
              </Switch>
          </Layout>
      )
    }

    return (
      <Router>
          {routes}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.auth.token !== null,
  }
};

const initMapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState()),
  }
};

export default connect(mapStateToProps, initMapDispatchToProps)(App);



// const browserHistory = Router.browserHistory;

// const App = () => (
//   <Router history={browserHistory}>
//     <div className="App">
//       <HeaderLayout />
//       <div className="main_part">
//         <Route exact path="/" component={HomePage} />
//         <Route path="/register" component={MessageForm} />
//         <Route path="/topics" component={Categories} />
//         <Route path="/profile" component={ProfilePage} />
//         <Route path="/login" component={LoginPage} />
//         <Route path="/registration" component={RegisterPage} />
//       </div>
//       <FooterLayout />
//     </div>
//   </Router>
// );


// export default App;
