import { combineReducers, applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import initialState from './initialState';
import tablesReducer from './tablesReducer';
import statusReducer from './statusReducer';
import thunk from 'redux-thunk';



const subreducers = {
  tables: tablesReducer,
  status: statusReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  
  compose(
    applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;