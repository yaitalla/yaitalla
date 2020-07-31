import { Mainwrap } from './style';
import React from 'react';
import Header from '../Header';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import HtmlHead from '../../components/HtmlHead';

const Landing = () => {
    return (
        <Mainwrap>
            <HtmlHead />
            <Header />
            <About />
            <Portfolio />
            <Contact />
        </Mainwrap>
    )
}

export default Landing;