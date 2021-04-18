import React from 'react';
// import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Review from '../Review/Review';
import HireUs from '../HireUs/HireUs';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Gallery></Gallery>
            <HireUs></HireUs>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;