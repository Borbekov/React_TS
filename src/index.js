import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';

const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(rerenderTree)

reportWebVitals();