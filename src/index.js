import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

import userReducer from './lib/store/reducers/registration';
import categoryReducer from './lib/store/reducers/category';

const rootReducer = combineReducers({
  usr: userReducer,
  ctr: categoryReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
