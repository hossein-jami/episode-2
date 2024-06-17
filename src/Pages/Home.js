import { Job } from "../Components/Job"
import React from "react"
import { SubmitForm } from "../Components/SubmitForm"
import { Profile } from "./Profile"
import AlertFunction from "../Components/AlertFunction"
import { Weather } from "../Components/wether"
export const Home = (porps)=>{
    return (
    <React.Fragment>
    <div>This is home page 
        porfile is {porps.state}
    </div>
    <Weather />
    <AlertFunction />
    <SubmitForm />   
    </React.Fragment>


    )
}