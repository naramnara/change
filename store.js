import { legacy_createStore as createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './reducers';
const rootReducer = combineReducers ({
    auth: authReducer,
    task: taskReducer,
});
const store = createStore(rootReducer);
   
export default store;