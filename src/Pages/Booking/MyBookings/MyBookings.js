import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/Contexts/useAuth';
import BookingInfo from '../BookingInfo/BookingInfo';

const MyBookings = () => {
    
    const {user,isLoading}= useAuth();
    // console.log(isLoading)
    const [bookings,setBookings]=useState({});
    useEffect(()=>{
        const url=`https://shielded-cliffs-29571.herokuapp.com/bookings/${user?.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setBookings(data))
    },[user])
    
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }    

    return (
        <>
            <Table striped bordered hover variant="dark">
            <thead>
    <tr>
      <th style={{width:'20%'}}>Name</th>
      <th style={{width:'25%'}}>Email</th>
      <th style={{width:'25%'}}>Booked Hotel</th>
      <th style={{width:'10%'}}>Per Night Cost</th>
      <th>Activity</th>
    </tr>
  </thead>
  </Table>
            {
               bookings?.map(booking => <BookingInfo key={booking._id} booking={booking}></BookingInfo>) 
            
            }
        </>
    );
};

export default MyBookings;