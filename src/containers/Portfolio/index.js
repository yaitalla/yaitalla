import React from 'react';
import Carousel from '../../components/Carousel';
import { Section, BtnWrap, BtnLine, MoreBtn
} from './style';

const PortfolioSection = () => {
    
    const goTo = (dest) => {
        document.getElementById(dest).scrollIntoView({ 
            behavior: 'smooth' 
          });
    }

    return (
        <Section id={'portfolio'}>
            <Carousel />
            <BtnLine>
                <BtnWrap>
                    <MoreBtn onClick={() => goTo('aboutSection')} >{"<< back"}</MoreBtn>
                </BtnWrap>
                <BtnWrap>
                    <MoreBtn onClick={() => goTo('contactSection')} >{"continue >>"}</MoreBtn>
                </BtnWrap>
            </BtnLine>
        </Section>
    )
}

export default PortfolioSection;