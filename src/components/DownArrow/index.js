import React, { useEffect } from 'react';
import { Wrap, UpArrow, Path } from './style';

const ScrollDown = () => {
    const scrollUp = () => {
        // globalThis.scrollTo({ top: globalThis.innerHeight*1.5, behavior: "smooth" })
        document.getElementById('aboutSection').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
    return (
        <Wrap id="scrollDispByyTracker" onClick={() => scrollUp()} >
            <UpArrow>
                <Path delay={0} d="M0 20 L30 52 L60 20" />
                <Path delay={0.5} d="M0 40 L30 72 L60 40" />
            </UpArrow>
        </Wrap>
    )
}

export default ScrollDown;