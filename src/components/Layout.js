import React from 'react';

import Banner from './Banner';
import Header from './Header';
import About from './About';
import Workouts from './Workouts';
import Pricing from './Pricing';
import Community from './Community';
import Faq from './Faq';
import Join from './Join';
import Footer from './Footer';


const Layout = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Workouts />
            <Pricing />
            <Community />
            <Faq />
            <Join />
            <Footer />
        </div>
    );
};

export default Layout;