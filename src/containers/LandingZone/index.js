import React from 'react';
import { Section, Welcome, Y , A} from './style';
import ScrollDown from '../../components/DownArrow';
import BigButton from '../../components/BigBtn';

const LandingZone = () => {
    return (
        <Section id="landingZone" >
            <BigButton />
            <ScrollDown dest={'aboutSection'}/>
        </Section>
    )
}

export default LandingZone;