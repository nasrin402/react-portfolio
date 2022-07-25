import React from 'react';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import HireMe from '../components/HireMe';
import Nav from '../components/Nav';
import Project from '../components/Project';
import Service from '../components/Service';
import Skill from '../components/Skill';
import Slider from '../components/Slider';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
        <Nav />
        <Slider />
        <Counter />
        <About />
        <Skill />
        <Service />
        <HireMe />
        <Project />
        <Testimonial />
        <Blog />
        <Contact />
        <Footer/>  
        </>
    );
}

export default Home;
