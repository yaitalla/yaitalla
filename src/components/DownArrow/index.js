import React, { useEffect } from 'react';
import { Wrap, UpArrow, Path } from './style';

const ScrollDown = ({dest, reverse}) => {
    const scrollUp = (dest) => {
        document.getElementById(dest).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    return (
        <Wrap
            up={reverse ? "180deg" : "0deg"}
            id="scrollDispByyTracker"
            onClick={() => scrollUp(dest)}
        >
            <UpArrow>
                <Path delay={0} d="M0 20 L30 52 L60 20" />
                <Path delay={0.5} d="M0 40 L30 72 L60 40" />
            </UpArrow>
        </Wrap>
    )
}

export default ScrollDown;