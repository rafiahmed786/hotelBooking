import React from 'react';
import './ExplorePlaces.css'

const ExplorePlaces = ({place}) => {
    const {title,image}=place;
    return (
       <div className="content">
           <div className="card">
                <div className="image"><img src={image} alt=""/></div>
                <div className="info">
                    <h3>{title}</h3>
                    <a href="https://youtube.com">Learn More</a>
                </div>
                </div>
       </div>
    );
};

export default ExplorePlaces;