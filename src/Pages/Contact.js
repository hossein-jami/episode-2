import React, { useEffect, useState } from "react"
import { SubmitForm2 } from "../Components/SubmitForm2";
import { Submitformm } from "../Components/Submitformm";

export const Contact = ()=>{
    const [showText , setShowText ] = useState(true);
    const [text , setText] = useState();


    useEffect(()=>{
        console.log('mounted')
        return console.log('unmounted')
    },[])

    useEffect(()=>{
        console.log('updating')
        
    },[text])

    return (
        <React.Fragment>
         <div>This is contact page</div>
         <button onClick={()=> setShowText(!showText)}>show text</button>
        {!showText && <input onChange={(e)=>setText(e.target.value) }></input>}
        <SubmitForm2 />
        <br></br>
        <Submitformm/>
        </React.Fragment>
   

    )
}