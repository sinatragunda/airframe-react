import React from 'react';
import {connect} from 'react-redux';
import {Home} from '../../routes/Home';
import LoginContainer from '../login/LoginContainer';

import {Navigate} from 'react-router-dom';
import HomeRender from './HomeRender';


class HomeContainer extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount =()=>{
		alert('Home mounting');		
	}

	render = ()=>{
		return(
		
			// <HomeRender isAuthenticated={this.props.isAuthenticated}/>
				<Home/>
			)
	}

}


// const mapStateToProps = (state)=>{
// 	return{
// 		isAuthenticated: state.login.authentication.isAuthenticated,
// 	}
// }

//export default connect(mapStateToProps,null)(HomeContainer);
export default HomeContainer;

