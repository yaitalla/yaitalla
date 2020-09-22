import React from 'react';
import Arrow from '../../components/DownArrow';
import { Section
} from './style';

const ContactSection = () => {
    return (
        <Section id="contactSection">
            <Arrow reverse={true} dest="landingZone" />
        </Section>
    )
}

export default ContactSection;