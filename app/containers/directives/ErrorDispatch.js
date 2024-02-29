

import React from 'react';
import {connect} from 'react-redux';
import { raiseError } from '../../actions/ErrorActions';

const ErrorDispatch = (props)=>{
    alert('We are in error directive page ,lets get something out here '+JSON.stringify(props.response));
    let message = 'You have raised an error';
    props.raiseErrorDispatch(props.response);
    return <></>
}

const mapDispatchToState = (dispatch)=>{
    return({
        raiseErrorDispatch : (response)=> dispatch(raiseError(response))
    })
}

export default connect(null ,mapDispatchToState)(ErrorDispatch);

