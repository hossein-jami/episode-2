import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'



 export const SubmitForm = ()=>{
    
    const schema = yup.object().shape({
   name:yup.string().required(),
   email:yup.string().email('ایمیل نادرست است').required("ایمیل اجباری است"),
   age:yup.number().positive().min(4).max(100).required(),
   password:yup.string().min(4).max(18).required(),
   confirmpassword: yup.string().oneOf([yup.ref("password")] , "password not matches").required()})

    const {register , handleSubmit , formState : {errors}} = useForm ({resolver : yupResolver(schema)});
    const onSubmitForm = (data) =>{
        console.log('the form is submited')
        console.log(data)
       
    }

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <input type='text' placeholder='name' {...register("name")} />
            {errors.name && (<p>{errors.name.message}</p>) }
            <input type='text' placeholder='email' {...register("email")} />
            {errors.email && (<p>{errors.email.message}</p>) }
            <input type='number' placeholder='age' {...register("age")} />
            {errors.age && (<p>{errors.age.message}</p>) }
            <input type='password' placeholder='password' {...register("password")} />
            {errors.password && (<p>{errors.password.message}</p>) }
            <input type='password' placeholder='confirm password' {...register("confirmpassword")} />
            {errors.confirmpassword && (<p>{errors.confirmpassword.message}</p>) }
            <input type='submit' />
        </form>
        </div>
    )

}