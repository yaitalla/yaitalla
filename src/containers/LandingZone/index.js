import React from 'react';
import { Section, H1, Y , A} from './style';
import { Welcome} from './style';
import ScrollDown from '../../components/DownArrow';

const LandingZone = () => {
    return (
        <Section>
            <Y/>
            <A/>
            <Welcome>Welcome</Welcome>
            <ScrollDown />
            
        </Section>
    )
}

export default LandingZone;