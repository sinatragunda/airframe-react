

import React  ,{Suspense} from "react";
import ProfileDetails from './../../routes/Apps/ProfileDetails/ProfileDetails';
import { connect} from 'react-redux';
import { mapUserIdToClientId} from "../network/ClientRequest";
import { PageLoader} from "../../components";
import NetworkHelper from "../helper/NetworkHelper";
import ClientDataContext from "./ClientDataContext";
import ViewClientContainer from "./ViewClientContainer";
import { useState } from "react";


const ClientProfileDetailsContainer = (props)=>{

    const [clientId ,setClientId] = useState(null);

    const init = ()=>{
        const roles = props.roles;
        let isSelfServiceUser = false; 
        roles.forEach(element => {
            if(element.name == 'Self Service User' || element.name == 'AGENT'){
                isSelfServiceUser = true ;
            }            
        });
        
        loadProfileInformation(isSelfServiceUser);
    }


    const loadProfileInformation = async (isSelfServiceUser)=>{

        if(isSelfServiceUser){
            
            const userId = props.userId;
            let response = await mapUserIdToClientId(userId);
            const isOk = NetworkHelper.isOK(response);
            
            if(isOk){
                setClientId(response.data.clientId);
            }
        }
    }

    const renderConditionally = ()=>{
        if(clientId){
            return( 
                <Suspense fallback = {<PageLoader message = 'Client Profile'/>}>
                    <ViewClientContainer clientId = {clientId}>
                        <ProfileDetails/>
                    </ViewClientContainer>
                </Suspense>
            )        
        }
        return <h2>No Client Data Loaded </h2>
    }

    init();
      
    return renderConditionally();


}

const mapStateToProps = (state)=>{

    const clientData = state.login.authentication.userData ;
    return{
        userId : clientData.userId,
        roles : clientData.roles
    }
}


export default connect(mapStateToProps)(ClientProfileDetailsContainer);