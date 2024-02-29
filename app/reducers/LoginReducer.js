
import {authenticationState} from './../store';
import { useNavigation} from 'react-router-dom';
import { Navigate } from 'react-big-calendar';
import buildNetworkRequest from '../containers/network/BuildNetworkRequest';

const LoginReducer = ( state = authenticationState ,action)=>{
	
	switch(action.type){
		case 'LOGIN':
			break; 
		case 'LOGIN_SUCCESS':
			let ret = Object.assign({} ,state ,{
				authentication : {...state.authentication,
					isAuthenticated : true ,
					userData : action.payload,
					authenticationKey: action.payload.base64EncodedAuthenticationKey
				}
			});
			buildNetworkRequest(ret.authentication);
			alert('this new state is '+JSON.stringify(ret));
			return ret ;	
		case 'LOGIN_FAILED':
			alert('Login failed dispatch hence kill operation');
			break;
						
	}
	return state;
}



export default LoginReducer;