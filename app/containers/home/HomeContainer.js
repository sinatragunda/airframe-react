import React ,{Suspense} from 'react';
import {connect} from 'react-redux';
import {Home} from '../../routes/Home';
import LoginContainer from '../login/LoginContainer';

import {Navigate} from 'react-router-dom';
import HomeRender from './HomeRender';
import { PageLoader } from '../../components';

class HomeContainer extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount =()=>{
		//alert('Home mounting ,can we load anything here ? the reports l mean and recent transactions ? ....Dispatch any action ? ');		
	}

	render = ()=>{
		return(
				<Suspense fallback = {<PageLoader message = "Loading Transactions"/>} >
					<Home/>
				</Suspense>
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

