import React from 'react';
import Carousel from '../../components/Carousel';
import ScrollDown from '../../components/DownArrow';
import { Section } from './style';

const PortfolioSection = () => {

    return (
        <Section id={'portfolio'}>
            <Carousel />
            <ScrollDown dest="contactSection" />
        </Section>
    )
}

export default PortfolioSection;