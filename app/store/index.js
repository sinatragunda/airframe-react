const authenticationState = {
	authentication:{
		authenticationKey : null ,
		isAuthenticated : false,
		userData : null,
		permissions : [] 
	}
}

const networkState ={
	connectionError:false
	
}

export {authenticationState ,networkState}