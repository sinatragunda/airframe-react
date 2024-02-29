const authenticationState = {
	authentication:{
		authenticationKey : null ,
		isAuthenticated : false,
		userData : null,
		permissions : [] 
	}
}

const networkState ={
	connectionError:false,
	errorMessage : null
	
}

export {authenticationState ,networkState}