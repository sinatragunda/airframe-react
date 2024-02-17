
import {authenticationState} from './../store';
import { useNavigation} from 'react-router-dom';
import { Navigate } from 'react-big-calendar';

const LoginReducer = ( state = authenticationState ,action)=>{
	
	switch(action.type){
		case 'LOGIN':
			break; 
		case 'LOGIN_SUCCESS':
			//alert('Login succesful with state'+JSON.stringify(state)); 
			try{
				let ret = Object.assign({} ,state ,{
					authentication : {...state.authentication,
						isAuthenticated : true ,
						userData : action.payload,
						authenticationKey: action.payload.base64EncodedAuthenticationKey
					}
				 });
				//alert('this new state is '+JSON.stringify(ret)); 
				return ret ;
			}
			catch(e){
				alert("what error is here ? "+JSON.stringify(e));
			}	
			 alert("Ret key is "+JSON.stringify(ret));
			 Navigate("/home");
			 break;
		case 'LOGIN_FAILED':
			alert('Login failed dispatch hence kill operation');
			break;
						
	}
	return state;
}


export default LoginReducer;