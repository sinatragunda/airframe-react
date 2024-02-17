

import { Form } from "reactstrap";
import FormHelper from "./FormHelper";


const stateMapper = (state ,arg ,key)=>{
    return{
        key : state[arg]
    }
}


export {FormHelper,stateMapper} ;