
const raiseError = (payload)=>{
    return{
        type : 'NETWORK_FAILURE',
        payload : payload
    }
}

export {raiseError};
