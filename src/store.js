import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// import currentUser from '../reducers/currentUser';

const rootReducer = combineReducers({
    form: formReducer,
});

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, REDUX_DEVTOOLS);

export default store