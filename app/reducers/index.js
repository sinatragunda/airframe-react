
import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import NetworkConnectionReducer from './NetworkConnectionReducer'

const reducer = combineReducers({
    login : LoginReducer,
    network :NetworkConnectionReducer
});

export default reducer ;