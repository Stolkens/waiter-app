import { combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import initialState from './initialState';
import tablesReducer from './tablesReducer';


const subreducers = {
  tables: tablesReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;