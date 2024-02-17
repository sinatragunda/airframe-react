import { stateMapper } from "../helper"
import {connect} from 'react-redux';

class Permissions extends React.Component{

    constructor(props){
        super(props)
    }

    hasPermission = (name)=>{
        let permissions = this.props.permissions;
        permissions.forEach(element => {
            if(element==='ALL_PERMISSIONS' || element == name){
                return true ;
            }
        });
        return false ;
    }

    shouldRender = (name)=>{
        let show = this.hasPermission(name);
        if(show){
            return this.props.children;
        }
        return <></>
    }

    render = ()=>{
        return this.shouldRender(this.props.permission);
    }

}

const mapStateToProps = (state)=>{
    return stateMapper(state ,login.authentication.permissions ,permissions);
}


export default connect(mapStateToProps)(Permissions);
