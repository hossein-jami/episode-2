import { useForm } from "react-hook-form";

export const Submitformm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}  style={{width:'24%',  margin:'auto'}}>
      <input type="text" placeholder="name" {...register("name")} />
      <input type="email" placeholder="email" {...register("email")} />
      <input type="number" placeholder="age" {...register("age")} />
      <input type="password" placeholder="password" {...register("password")} />
      <input
        type="password"
        placeholder="confirmpassword"
        {...register("confirmpassword")}
      />
      <input type="submit" />
      
    </form>
  );
};
