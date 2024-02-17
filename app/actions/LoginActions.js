
const login = (payload)=>{
	return{
		type: 'LOGIN',
		payload:payload
	}
}

const loginSuccessful = (payload)=>{
	return{
		type: 'LOGIN_SUCCESS',
		payload: payload
	}
}


const loginFailed = ()=>{
	return{
		type : 'LOGIN_FAILED'
	}
}

export {login ,loginSuccessful ,loginFailed};
