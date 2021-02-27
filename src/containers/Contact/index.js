import React from 'react';
import Arrow from '../../components/DownArrow';
import LogoNavbar from '../../components/LogoNav';
import { Section, Title
} from './style';

const ContactSection = () => {
    return (
        <Section id="contactSection">
            <LogoNavbar />
            <Arrow reverse={true} dest="landingZone" />
        </Section>
    )
}

export default ContactSection;