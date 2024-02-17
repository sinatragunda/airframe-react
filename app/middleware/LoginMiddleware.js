
import React from "react";
import axios  from "axios";

import * as actions from './../actions';
import NetworkHelper from "../containers/helper/NetworkHelper";


const LoginMiddleware = (middleware)=>(dispatch)=>(action)=>{
	
	switch(action.type){
		case 'LOGIN': 
			let promise = NetworkHelper.authenticate(action.payload);
			promise.then((res)=>onAuthenticationResponse(res ,dispatch) ,(res)=>onAuthenticationFailed(res,dispatch)).catch((res)=>onNetworkError(res ,dispatch));
			break;
		
	}

	return dispatch(action);
}

const onAuthenticationResponse = (response ,dispatch)=>{
	
	const data = response.data ;
	const action = actions.loginActions.loginSuccessful(data);
	dispatch(action);

}

const onAuthenticationFailed = (response ,dispatch)=>{
	
	alert('has the next failed ? ');

	console.log(JSON.stringify(response));

	let code = response.code ;
	let action = null ;
	
	alert(code);
	switch(code){
		case 'ERR_NETWORK':
			action = actions.networkActions.networkFailure(response);
			break;
		case 'ERR_BAD_REQUEST':
			action = actions.networkActions.loginFailed();
			break;
		default:
			action = actions.networkActions.loginFailed();
			break;
	}

	alert('Authentication failed and your response is '+JSON.stringify(response));	
	dispatch(action);

}

const onNetworkError = (response ,dispatch)=>{
	alert('Why are we catching a network error ,whose throwing it ?');
	console.log("Network error "+JSON.stringify(response));
	let action = actions.networkActions.networkFailure(response);
	dispatch(action);
}

export {LoginMiddleware};
