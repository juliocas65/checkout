import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/app/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer  from './store/reducers/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
  productList: [],
  cartProductList: [],
  cartProductResume: []
}

const store = createStore(reducer, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);