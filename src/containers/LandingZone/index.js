import React from 'react';
import { Section, Welcome, Y , A} from './style';
import ScrollDown from '../../components/DownArrow';

const LandingZone = () => {
    return (
        <Section id="landingZone" >
            <Y/>
            <A/>
            <Welcome>Welcome</Welcome>
            <ScrollDown dest={'aboutSection'}/>
            
        </Section>
    )
}

export default LandingZone;