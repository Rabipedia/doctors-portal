import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import FeaturesService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturesService/>
            <MakeAppointment/>
            <Testimonial/>
            <Blog/>
            <Doctor/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;