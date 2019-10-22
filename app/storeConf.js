import reducers from './reducers/index';
import {createStore, compose} from 'redux';

let store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : false))
export default store;