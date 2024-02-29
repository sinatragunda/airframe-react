import React , {Suspense} from "react";
import NetworkHelper from "../helper/NetworkHelper";


const loadClientInfo = (clientId)=>{

    let url = '/clients/'+clientId;
    return NetworkHelper.get(url);

}

const mapUserIdToClientId = (userId)=>{
    
    let url = '/self/clients/map/'+userId;
    return NetworkHelper.get(url);

}

export {loadClientInfo ,mapUserIdToClientId}
