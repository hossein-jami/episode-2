import React from "react"
import { useNavigate } from "react-router-dom"
export const About = ()=>{
    let navigate = useNavigate();
    return (
        <React.Fragment>
            <div>About</div>
            <button onClick={()=>navigate('/') }>Go to home page</button> <br></br>
            <input onChange={()=> navigate('/contact')}></input>
        </React.Fragment>
     
    )
}