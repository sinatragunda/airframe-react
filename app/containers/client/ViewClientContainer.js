import React from "react";
import { useState } from "react";
import NetworkHelper from "../helper/NetworkHelper";
import ClientDataContext from "./ClientDataContext";

const ViewClientContainer = (props)=>{

    const clientId = props.clientId;

    const [clientData ,setClientData] = useState();

    const componentMount = ()=>{
        
        const url = '/clients/'+clientId;
        let promise = NetworkHelper.get(url);
        promise.then(onClientDataLoaded ,null).catch(null);
    
    }

    const onClientDataLoaded = (response) =>{
        setClientData(response.data);
    }

    const render = ()=>{
        if(clientData){
            return(
                <ClientDataContext.Provider value={clientData}>
                    {props.children}
                </ClientDataContext.Provider>
            )
        }
        return <></>
    }

    componentMount();
    return render();
}

export default ViewClientContainer;