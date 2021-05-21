import { Mainwrap } from './style';
import React, {useEffect} from 'react';
import LandingZone from '../LandingZone';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import About from '../About';
import HtmlHead from '../../components/HtmlHead';


const Landing = () => {
    return (
        <Mainwrap>
            <HtmlHead />
            <LandingZone />
            {/* <About /> */}
            {/* <Portfolio /> */}
            {/* <Contact /> */}
        </Mainwrap>
    )
}

export default Landing;