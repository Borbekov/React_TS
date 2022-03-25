import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux';
import chatReducer from './redux/reducers/chat-reducer';
import postReducer from './redux/reducers/post-reducer';

let reducers = combineReducers({
  chatReducer,
  postReducer
})
const store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();