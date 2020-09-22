import React from 'react';
import { Section, H1, Y , A} from './style';
import { Welcome} from './style';
import ScrollDown from '../../components/DownArrow';

const LandingZone = () => {
    const scrollUp = () => {
        document.getElementById('aboutSection').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
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