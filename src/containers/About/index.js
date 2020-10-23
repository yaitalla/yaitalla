import React, { useState } from 'react';
import IconRow from '../../components/IconRow';
import NameAnimation from '../../components/NameAnim';
import LeftPortrait from '../../components/FixedPortrait';
import LocalNavBtn from '../../components/LocalNavBtn';
import TextInfo from '../../components/TextNavigation';
import ScrollDown from '../../components/DownArrow';
import { Section, SlideTitle, Appear,
    RightSide, Name
} from './style';

const AboutSection = () => {
    const [slided, setSlided] = useState(false);
    const allAnim = () => {
        const tab = document.getElementsByClassName("textinfo")
        const icons = document.getElementsByClassName('Ani')

        if (!slided && !tab[0].classList.contains('slided')){
            for (let i=0; i<5; i++){
                tab[i].classList.add('slided')
            }
        } else if (icons[0].classList.contains('opened')){
            for (let i=0; i<7; i++){
                icons[i].classList.add('closed')
                icons[i].classList.remove('opened')
            }
        }
        setSlided(!slided)
    }
    return (
        <Section id="aboutSection" >
            <LeftPortrait />
            <IconRow />
            <SlideTitle visu={slided ? 0 : 1} slide={slided ? -100 : 0}>
                <RightSide>
                    <Name>Yassine Aitalla</Name>
                    <NameAnimation s="FRONTEND DEVELOPER" />
                    <Appear>
                        <LocalNavBtn cb={allAnim} content="learn more" />
                    </Appear>
                </RightSide>
            </SlideTitle>
            
            <TextInfo visu={slided ? 1 : 0} cb={allAnim} offset={slided ? 50 : 150}/>
            <ScrollDown dest="portfolio" />
        </Section>
    )
}

export default AboutSection;