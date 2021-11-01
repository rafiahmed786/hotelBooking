import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const ServiceDetails = () => {
    const {id}=useParams();
    const [service,setService]=useState({});

    useEffect(()=>{
        const url=`https://shielded-cliffs-29571.herokuapp.com/hotels/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => setService(data))
    },[])

    
    const {_id,name,image,description,ratings,price}=service;
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className="card shadow" style={{width:'500px',margin:'10px',borderRadius:'5px'}}>
        <div style={{width:'100%',height:"300px",overflow:"hidden"}}>
        <img src={image} style={{width:'100%',objectFit:"cover",borderRadius:'5px'}} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
           <p><Rating initialRating={parseInt(ratings)}  emptySymbol="far fa-star"
                fullSymbol="fas fa-star" readonly stop={8} /></p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>Per Night Cost: <b> {parseInt(price)}$</b></p>
        <Nav.Link href={`/booking/${_id}`}><button className="button btn shadow px-4">Book Now</button></Nav.Link>
          
        </div>
      </div>
        </div>
    );
};

export default ServiceDetails;