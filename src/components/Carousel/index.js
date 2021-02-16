import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from './arrows';
import { Wrap, Item, Title, Image,
    OutterCard, Frame, StyledA,
    InnerBox
} from './style';
import Data from './data';
import Panel from './panel';

const Carousel = () => {
    const [side, setSide] = useState(0);
    const [primary, setPrimary] = useState(0);
    const angle = 360/Data.length;
    const check = (way) => {
        const carou = document.getElementById("carouselTracker");
        carou.style.transform = `rotateY(${side+way}deg)`;
        setSide(side + way);
        setPrimary(primary < Data.length-1 ? primary+1 : 0);
    }
    return (
        <Wrap>
            <ArrowLeft cb={() => check(angle)} />
                <OutterCard>
                    <InnerBox id="carouselTracker">
                        {
                            Data.map((item, i) => <Panel key={i} 
                                                        rotationY={angle*i} 
                                                        item={item} 
                                                        side={i}
                                                        primary={primary}
                                                    />)
                        }
                    </InnerBox>
                </OutterCard>
            <ArrowRight  cb={() => check(-angle)} />
        </Wrap>
    )
}

export default Carousel;