
const loadClientInfo = (clientId)=>{
    return{
        type : 'LOAD_CLIENT_INFO',
        payload : clientId
    }
}

export {loadClientInfo};