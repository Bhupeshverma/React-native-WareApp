import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
      applyMiddleware(thunk)
)
)
export default store;
