import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
export const SubmitForm2 = () =>{

    const schema = yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email().required(),
        age :yup.number().positive().min(18).max(100).required(),
        password:yup.string().min(4).max(18).required(),
        confirmpassword :yup.string().oneOf([yup.ref('password')]).required()
    })



    const {register , handleSubmit , formState : {errors}} = useForm ({resolver : yupResolver(schema) }) ;

    const onSubmitForm = (data)=>{
        console.log(data)
    }



    return (
        <form onSubmit={handleSubmit(onSubmitForm)} style={{width:'24%',  margin:'auto'}}>
            <input type="text" placeholder="name..." {...register("name")} />
            {errors.name && (<p>{errors.name.message}</p>) }
            <input type="text" placeholder="email..." {...register("email")} />
            <input type="number" placeholder="age..." {...register("age")} />
            <input type="password" placeholder="password..." {...register("password")} />
            <input type="password" placeholder="confitmpassword..." {...register("confirmpassword")} />
            <input type="submit" />
        </form>
    )
}