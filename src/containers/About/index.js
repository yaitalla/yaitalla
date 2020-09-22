import React, { useState } from 'react';
import { HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeJsIcon, GithubIcon } from '../../components/Icons';
import NameAnimation from '../../components/NameAnim';
import { Section, LeftSide, RightSide, Name, Slider,
    YassinePic, Text, MoreBtn, BtnWrap, IconRow, Info, BtnLine
} from './style';

const AboutSection = () => {
    const [slided, setSlided] = useState(false);
    const nextStep = () => {
        document.getElementById('portfolio').scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
    return (
            <Section  id={'aboutSection'}>
                <Slider slide={slided ? -100 : 0}>
                    <LeftSide>
                        <YassinePic src={'/netero.jpg'}/>
                    </LeftSide>
                    <RightSide>
                        <Name>YASSINE AITALLA</Name>
                        <NameAnimation s="FRONTEND DEVELOPER" />
                        <BtnWrap>
                            <MoreBtn onClick={() => setSlided(!slided)} >{"Learn more >>"}</MoreBtn>
                        </BtnWrap>
                    </RightSide>
                </Slider>
                <Info slide={slided ? 0 : 100} className="infoslide" >
                        <Text>I can build your online ambition using the latest web technologies.</Text>
                        <IconRow>
                            <HtmlIcon/>
                            <CssIcon/>
                            <JsIcon/>
                            <ReactIcon/>
                            <NodeJsIcon/>
                            <GithubIcon/>
                        </IconRow>
                        <BtnLine>
                            <BtnWrap>
                                <MoreBtn onClick={() => setSlided(!slided)} >{"<< back"}</MoreBtn>
                            </BtnWrap>
                            <BtnWrap>
                                <MoreBtn onClick={nextStep} >{"continue >>"}</MoreBtn>
                            </BtnWrap>
                        </BtnLine>
                    </Info>
            </Section>
        
    )
}

export default AboutSection;