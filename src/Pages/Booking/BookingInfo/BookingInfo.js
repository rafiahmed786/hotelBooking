import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const BookingInfo = ({booking}) => {
    const {_id,name,hotelName,email,price}=booking;

  const handleDelete=id=>{
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
      const url = `http://localhost:5000/bookings/${id}`
    fetch(url,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        alert('Deleted Successfully')
        window.location.reload()
      }
    })
    }
  }

    return (
        <Table striped bordered hover variant="dark">
  
  <tbody>
    <tr>
      <td style={{width:'20%'}}>{name}</td>
      <td style={{width:'25%'}}>{email}</td>
      <td style={{width:'25%'}}>{hotelName}</td>
      <td style={{width:'10%'}}>{price}$</td>
      <td ><button className="btn" onClick={()=>handleDelete(_id)} style={{color:'#fff'}}>Cancel Booking</button></td>
    </tr>
   
    
  </tbody>
</Table>
    );
};

export default BookingInfo;