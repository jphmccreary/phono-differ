import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root/Root';

import { createStore, applyMiddleware, compose } from 'redux';
import { selectionReducer } from './reducers';
import defaultState from './defaultState';

let enhancers;
if (process.env.REACT_APP_ENV !== 'production') {
  enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const store = createStore(
  selectionReducer,
  defaultState,
  enhancers
);

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
