import React from 'react';
import { NavLink } from 'react-router-dom';
import UseHotels from '../../Hooks/useHotels';
import Hotel from '../../Hotel/Hotel';

const Hotels = () => {
    const [hotels]= UseHotels();

    return (
        <div>
            <h2 className="fs-3 mt-5" style={{color:'#c5854a'}}>Need A Vacation? <br /> Book Your Favourite Hotels & Resorts</h2>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
            {
                hotels.slice(0,6).map(hotel=> <Hotel key={hotel._id} hotel={hotel}></Hotel>)
            }
        </div>
        <NavLink to='/hotels'> <button className="button shadow px-5 py-2 rounded mt-3 mb-4 border-0">View All</button></NavLink>
        </div>
    );
};

export default Hotels;