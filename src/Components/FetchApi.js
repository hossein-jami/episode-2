import Axios from "axios";
import { useState } from "react"

export const FetchApi = ()=>{

    const [predictedresult , setPredictedresult] = useState(0);



    const [name , setName ] = useState("");

    const fetchAge =()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
            console.log(res.data)
            setPredictedresult(res.data)
        })
    }



    const [predictexcuse , setPredictexcuse] = useState('');



    const hadnledata = (excuse)=>{

        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
            console.log(res.data[0].excuse)
            setPredictexcuse(res.data[0].excuse)
        })

    }



    return(
        
        <div>
            <input onChange={(event)=> setName(event.target.value)}></input>
            <button onClick={fetchAge}>fetch</button>
            <h1>age is : {predictedresult?.age}</h1>
            <h1>name is : {predictedresult?.name}</h1>
            <br></br>
            <button onClick={()=> hadnledata("party")} >party</button>
            <button onClick={()=> hadnledata("family")}>family</button>
            <button onClick={()=> hadnledata('office')}>office</button>
            <h1>{predictexcuse}</h1>

        </div>
    )
}