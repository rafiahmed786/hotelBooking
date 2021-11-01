import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Addhotels = (props) => {
     const { register, handleSubmit} = useForm();
     const onSubmit = data => {
        axios.post('http://localhost:5000/hotels', data)
        .then(res=> {
            console.log(res)
        })
        };
     
    return (
        <div className="d-flex align-items-center flex-column py-5">
            <h4>Give Your Hotel's Information</h4>
             <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-25 ">
      <input required className="p-2 mt-3" {...register("name")} placeholder="Enter your hotel's name" />
      <textarea required className="p-2 mt-3" {...register("description")} placeholder="Describe Your Hotel's specifications" />
      <input required className="p-2 mt-3"  {...register("price")} placeholder="Per Night Cost" />
      <input required className="p-2 mt-3" {...register("ratings")} placeholder="Rating" />
      <input required className="p-2 mt-3" {...register("image")} placeholder="Enter image url" />
      <input className="button py-2 mt-3 shadow" type="submit" style={{border:'none'}} />
    </form>

        </div>
    );
};

export default Addhotels;