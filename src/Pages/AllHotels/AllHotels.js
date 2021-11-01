import React from 'react';
import UseHotels from '../Hooks/useHotels';
import Hotel from '../Hotel/Hotel';

const AllHotels = () => {
    const [hotels]= UseHotels();
    return (
        <div>
            <h2 className="fs-3 mt-5" style={{color:'#c5854a'}}>Need A Vacation? <br /> Book Your Favourite Hotels & Resorts</h2>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
            {
                hotels.map(hotel=> <Hotel key={hotel._id} hotel={hotel}></Hotel>)
            }
        </div>
        </div>
    );
};

export default AllHotels;