
import { action } from "commander";
import React from "react";
import { loadClientInfo } from "../containers/network/ClientRequest";


const ClientMiddleware = (middleware)=>(dispath)=>(action)=>{

    switch(action.type){
        case 'LOAD_CLIENT_INFO':
            alert('load client info');
            let clientId = action.payload ;
            let promise = loadClientInfo(clientId);
            promise.then(onClientInformation);
            break;
        default:    

    }
}

const onClientInformation = (response)=>{

    alert(JSON.stringify('Client info loaded '+JSON.stringify(response)));
    
}


export default ClientMiddleware;