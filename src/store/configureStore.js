import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

export default store;