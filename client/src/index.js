import './wdyr.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import productTitle from './store/reducers/productTitle'
import productList from './store/reducers/productList';
import productInfo from './store/reducers/productInfo';
import user from './store/reducers/user';
import productLike from './store/reducers/productLike';
import productBucket from './store/reducers/productBucket';
import news from './store/reducers/news';
import dataFull from './store/reducers/adminFullData';
import userCountSell from './store/reducers/userCountSell';
import aa from './store/reducers/switch';

const rootReducer = combineReducers({
  productTitle,
  productList,
  productInfo,
  user,
  productLike,
  productBucket,
  news,
  dataFull,
  userCountSell,
  aa,
});

const logger = store => {
  return next => {
      return action => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;
      }
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') || document.createElement('div')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
