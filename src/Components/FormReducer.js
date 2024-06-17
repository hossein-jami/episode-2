import { useReducer } from "react"

export const initialform ={
    title:"",
    description:"",
    price:0,
    category:"",
    tags:[], 
    quantity:0
    

}


export const FormReducer =(state , action)=>{
    switch (action.type){
        case "input-change":
        return {...state , [action.data.name] : action.data.value}
        case "add-tag":
            return {...state , tags : [...state.tags , action.data]}
            case "remove-tag":
                return {...state , tags : state.tags.filter((tag)=> tag !== action.data)}
                case "increase":
                    return {...state , price : state.price + 1 } 
                    case "decrease":
                        return {...state , quantity : state.quantity - 1 }  
                        default : return state
    }
    
}