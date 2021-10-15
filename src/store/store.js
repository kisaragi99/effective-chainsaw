import { applyMiddleware, createStore } from 'redux';
import thunkMidlleware from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunkMidlleware));

export default store;
