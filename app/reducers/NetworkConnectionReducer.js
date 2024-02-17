import { networkState } from "../store"


const NetworkConnectionRecuder = (state = networkState ,action)=>{

    switch(action.type){
        case 'NETWORK_FAILURE':
            console.log('Network Failure Dispath '+JSON.stringify(action.payload));
            const newState = Object.assign({} ,state ,{
                connectionError  : true
            });
            alert('New State is now '+JSON.stringify(newState));
            return newState;
        
    }

    return state ;
}

export default NetworkConnectionRecuder;