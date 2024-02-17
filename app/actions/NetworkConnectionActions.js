

const networkFailure = (payload)=>{
    return{
        type : 'NETWORK_FAILURE',
        payload : payload
    }
}

export {networkFailure};