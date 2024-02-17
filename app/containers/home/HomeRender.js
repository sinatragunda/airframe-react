import LoginContainer from "../login/LoginContainer"
import React from "react"
import { Home } from "../../routes/Home"

const HomeRender = ({isAuthenticated})=>{
        if(isAuthenticated){
           return <Home/>
        }
        return <LoginContainer/>
    
}

export default HomeRender;