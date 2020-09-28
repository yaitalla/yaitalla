import { Mainwrap } from './style';
import React from 'react';
import Header from '../Header';
import LandingZone from '../LandingZone';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import About from '../About';
import HtmlHead from '../../components/HtmlHead';

const Landing = () => {
    return (
        <Mainwrap onScroll={() => console.log(globalThis.scrollY)} >
            <HtmlHead />
            <Header />
            <LandingZone />
            <About />
            <Portfolio />
            <Contact />
        </Mainwrap>
    )
}

export default Landing;