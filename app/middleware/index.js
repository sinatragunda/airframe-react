
import {applyMiddleware} from 'redux';
import {LoginMiddleware} from './LoginMiddleware';

const middleware = applyMiddleware(LoginMiddleware);

export default middleware;