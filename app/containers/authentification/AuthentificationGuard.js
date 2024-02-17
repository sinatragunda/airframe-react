import React from 'react';
import {connect} from 'react-redux';

class AuthentificationGuard extends React.Component {

	constructor(props){
		super(props);
	}

	guardedRoute = ()=>{

		alert('is this even working ? ');

		const isAuthenticated = this.props.isAuthenticated;

		alert("Is this authenticated son ? "+isAuthenticated.toString());
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
	
	alert(JSON.stringify(state));
	return{
		isAuthenticated: state.login.isAuthenticated
	}
}

export default connect(mapStateToProps)(AuthentificationGuard);