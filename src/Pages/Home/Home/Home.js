import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import ExploreContainer from '../ExplorePlacees/ExploreContainer';
import HomeSlider from '../HomeSlider/HomeSlider';
import Hotels from '../Hotels/Hotels';

const Home = () => {
    return (
        <div>
           <HomeSlider></HomeSlider>
           <Hotels></Hotels>
           <About></About>
           <ExploreContainer></ExploreContainer>
        </div>
    );
};

export default Home;