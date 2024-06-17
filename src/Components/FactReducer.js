export const initialState = {
    loading : false ,
    fact : "" ,
    error : false 
}


export const FactReducer =(state , action)=>{
    if(action.type === "fetch_start")
        return {loading : true ,fact: "" , error:false } 
       if(action.type === "fetch_success")
            return {loading : false ,fact: action.data , error:false }
       if(action.type === "fetch_error")
        return {loading : false ,fact: "" , error:true }
}