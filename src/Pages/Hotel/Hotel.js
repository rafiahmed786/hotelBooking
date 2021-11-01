import React from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const Hotel = ({hotel}) => {
    // console.log(hotel)
    const {_id,name,image,description,price,ratings}=hotel;
    // console.log(name)
    return (
        <div className="card shadow" style={{width:'320px',margin:'10px',borderRadius:'5px'}}>
        <div style={{width:'100%',height:"200px",overflow:"hidden"}}>
        <img src={image} style={{width:'100%',objectFit:"cover",borderRadius:'5px'}} className="card-img-top" alt="..."/>
        </div>
        <div className="card-body">
          <p><Rating initialRating={parseInt(ratings)}  emptySymbol="far fa-star"
                fullSymbol="fas fa-star" readonly stop={8} /></p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text" style={{height:'120px'}}>{description?.slice(0,120)}...</p>
          <p>Per Night Cost: <b> {parseInt(price)}$</b></p>
        <NavLink to={`/serviceDetail/${_id}`} ><button className="btn button mb-4">View Details</button></NavLink>
          
        </div>
      </div>
    );
};

export default Hotel;