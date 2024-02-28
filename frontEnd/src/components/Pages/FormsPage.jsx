import React from 'react'
import CourseForm from '../AllForms/CourseForm';
import { useForm } from "react-hook-form";

function FormsPage() {
    
    const { register, handleSubmit } = useForm();
    return (
      <form onSubmit={handleSubmit((data)=>console.log(data))} className=" bg-primary">
        
        <CourseForm register={register}/>
     
      </form>
  )
}

export default FormsPage