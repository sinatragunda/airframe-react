
import axios from 'axios';
import { stateMapper } from '../helper';
import { connect} from 'react-redux';
import React from 'react';

const buildNetworkRequest = ({authenticationKey}) =>{
    axios.defaults.headers["Authorization"] = new String("Basic ").concat(authenticationKey) ;
    axios.defaults.headers["Accept"] = 'application/json ,text/plain',
    axios.defaults.headers["Content-Type"] = "application/json"
    axios.defaults.headers["access-control-allow-origin"] = "*";
}

export default buildNetworkRequest;