import React, { useEffect, useState } from 'react';
import ExplorePlaces from './ExplorePlaces';

const ExploreContainer = () => {
    const [places,setPlaces]=useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/places')
        .then(res=>res.json())
        .then(data=> setPlaces(data))
    },[])
    const data = Array.from(places);
    return (
        <div className="my-5">
            <h2 className="fs-3 mt-5 mb-4" style={{color:'#c5854a'}}>Explore Some Beautiful Places</h2>
            <div className='d-flex justify-content-center flex-wrap '>
            {
                data.map(place=> <ExplorePlaces key={place._id} place={place}></ExplorePlaces>)
            }
        </div>
        </div>
        
    );
};

export default ExploreContainer;