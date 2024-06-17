import { useReducer, useRef, useState } from "react"
import { FormReducer, initialform } from "./FormReducer"
import { type } from "@testing-library/user-event/dist/type";

export const Form = ()=>{

    const tagref = useRef();

    const [state , dispatch] = useReducer(FormReducer , initialform);
    const handleInputChange =(event)=>{
        dispatch({type : "input-change" , data : {name:event.target.name , value : event.target.value} })
    }

    const handletag =()=>{
        const tags = tagref.current.value.split(",")
        tags.forEach(t => {
            dispatch({type : "add-tag" , data : t})
        })
    }
 



    console.log(state);
    return (
        <form>
            <input  type="text" placeholder="عنوان" name="title" onChange={handleInputChange} />
            <input type="text" placeholder="توضیح" name="description" onChange={handleInputChange}/>
            <input type="number" placeholder="قسمت" name="price" onChange={handleInputChange}/>
            <p>مجموعه</p>
            <select name="category" onChange={handleInputChange}>
                <option value="کیف">کیف</option>
                <option value="کفش">کفش</option>
                <option value="لباس">لباس</option>
            </select>
            <p>tag</p>
            <textarea placeholder="tags" ref={tagref}></textarea>
            <br/>
            <button type="button" onClick={handletag} >انتخاب تگ</button>
            {state.tags.map((tag)=>{
              return  <button  onClick={()=> dispatch({type : "remove-tag" , data : tag})}
              >{tag}</button>
            })}
            <div>
                <button type="button" onClick={()=>dispatch({type : "increase"})}>+</button>
                {state.quantity}
                <button type="button" onClick={()=>dispatch({type : "decrease"})}>-</button>
                <button>{state.tags}</button>
            </div>
        </form>
    )
}