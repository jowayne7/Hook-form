import React from "react";
import {useForm} from "react-hook-form";
import './App.css'; 
function App(){
  const {register, handleSubmit, formState :{errors},}=useForm();


const onSubmit=(data)=>{
  console.log(data);
}

return(
  <div>
    <h1>React Hook Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" id="name" {...register("name", {required: true})} placeholder="Username" />
      {errors.name && <span>Username is required</span>}

      <input type="email" id="email" {...register("email", {register: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, } )} placeholder="Email" />
      {errors.email && <span>Please enter a valid email address</span>}

      <input type="password" id="password" {...register("password", {required: true})} placeholder="password" />
      {errors.password && <span>Passwors is required</span>}


      <button type="submit">Submit</button> 
  </form>
  </div> 
)
}

export default App;   
