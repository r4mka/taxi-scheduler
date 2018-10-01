import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';

const initialState = fromJS({});

const middlewares = [];

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  if (typeof window.devToolsExtension === 'function') {
    enhancers.push(window.devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(
  reducers,
  initialState,
  composedEnhancers,
);

export default store;
