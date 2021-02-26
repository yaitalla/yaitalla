import React from 'react';
import Carousel from '../../components/Carousel';
import ScrollDown from '../../components/DownArrow';
import { Section, Title } from './style';

const PortfolioSection = () => {

    return (
        <Section id={'portfolio'}>
            <Title>Some personal projects</Title>
            <Carousel />
            <ScrollDown dest="contactSection" />
        </Section>
    )
}

export default PortfolioSection;