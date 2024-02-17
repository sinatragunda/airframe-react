import React from 'react';
import {connect} from 'react-redux';
import LoginContainer from '../login/LoginContainer';
import { Outlet} from 'react-router-dom';
class AuthentificationGuard extends React.Component {

	constructor(props){
		super(props);
	}

	guardedRoute = ()=>{

		const isAuthenticated = this.props.isAuthenticated;

		if(isAuthenticated){
			return <Outlet />
		}
		return <LoginContainer /> 
	}

	render = ()=>{
		return this.guardedRoute();
	}
}



const mapStateToProps = (state) =>{
	return{
		isAuthenticated: state.login.authentication.isAuthenticated
	}
}

export default connect(mapStateToProps)(AuthentificationGuard);