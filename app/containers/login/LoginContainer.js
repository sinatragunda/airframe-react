
import React ,{useState} from 'react';
import * as Helper from '../helper';
import Login from '../../routes/Pages/Login';
import {login} from './../../actions/LoginActions';
import {connect} from 'react-redux';

const LoginContainer = (props)=>{

    let loginDetails = {
        username : null ,
        password: null 
    }

    const [loginForm ,setLoginForm] = useState(loginDetails);

    const updateUsername = (event)=>{
        let username = Helper.FormHelper.eventTargetValue(event);
        setLoginForm({...loginForm ,username : username});
    }

    const updatePassword = (event)=>{
        let password = Helper.FormHelper.eventTargetValue(event);
        setLoginForm({...loginForm ,password:password})
    }

    const handleLogin =()=>{
        props.loginDispath(loginForm);
    }

    return(
        <>
            <Login handleLogin= {handleLogin} updatePassword= {updatePassword} updateUsername={updateUsername}/>

        </>
    )

}

const mapDispatchToState = (dispatch)=>{
    return({
        loginDispath : (payload)=> {dispatch(login(payload))}
    })
}

export default connect(null ,mapDispatchToState)(LoginContainer);