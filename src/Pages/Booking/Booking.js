import axios from 'axios';
import './Booking.css'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/Contexts/useAuth';
import { Spinner } from 'react-bootstrap';

const Booking = () => {


     const { register, handleSubmit,reset} = useForm();
     const {id}=useParams();
    const [booking,setBooking]=useState({});
     const {user,isLoading}=useAuth();
    
     
     useEffect(()=>{
        const url=`http://localhost:5000/hotels/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setBooking(data))
    },[])
    const {_id,name,price}=booking;

    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
     
         const onSubmit = data =>{
         axios.post(`http://localhost:5000/bookings`,data)
         .then(res=>console.log(res))
         alert('Your Booking Placed Successfully')
         reset();
     }

   

    return (
        <div className="d-flex align-items-center flex-column py-5">
            <h4>Please Fill Up the Forms</h4>
             <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-25">
      <input className="p-2 mt-3" {...register("name")} placeholder="Enter your name"  required />
      <input defaultValue={user?.email} type="email" required className="p-2 mt-3" {...register("email")} placeholder="Enter your E-mail"  />
      <input required className="p-2 mt-3" {...register("phone")} placeholder="Enter your phone number" />
      <input required className="p-2 mt-3"  {...register("address")} placeholder="Enter Your Address" />
        <h5 className="mt-4">Hotel's Information</h5>
        <label htmlFor="" className="label-text">Name</label>
      <input defaultValue={name}  required className="p-2"  {...register("hotelName")}  readOnly />
      <label htmlFor="" className="label-text mt-3">Per Night Cost $</label>
      <input defaultValue={price} required className="p-2"  {...register("price")}  readOnly/>
      <input defaultValue={_id}  required className="p-2 d-none"  {...register("id")}  readOnly />
      
      <input className="button py-2 mt-3 shadow" type="submit" style={{border:'none'}} />
    </form>

        </div>
    );
};

export default Booking;