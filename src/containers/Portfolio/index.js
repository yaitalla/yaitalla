import React from 'react';
import Carousel from '../../components/Carousel';
import ScrollDown from '../../components/DownArrow';
import { Section, Title } from './style';
import RadioButton from '../../components/RadioButton';

const PortfolioSection = () => {

    return (
        <Section id={'portfolio'}>
            {/* <RadioButton/> */}
            {/* <Title>Some personal projects</Title> */}
            <Carousel />
            <ScrollDown dest="contactSection" />
        </Section>
    )
}

export default PortfolioSection;