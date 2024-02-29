
import React ,{ useEffect } from 'react';
import {connect} from 'react-redux';


const ErrorDirective = (props)=>{

    useEffect(()=>{
        alert('Error Directive Message Changed');
    },[props.errorMessage]
    )
    
    return(
        
        setTimeout(()=>{
            <>
                <label>{props.errorMessage}</label>
            </>
        },5000)           
    )
}

const mapDispatchToState = (state)=>{
    return{
        errorMessage : 'Some Error Son'
    }
}

export default connect(mapDispatchToState)(ErrorDirective);