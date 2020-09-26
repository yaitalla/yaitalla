import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from './arrows';
import { Wrap, Item,
    OutterCard,
    InnerBox
} from './style';

const Carousel = () => {
    const [side, setSide] = useState(0);
    const data = ["tests", "doc", "lib", "gps", "template"]
    const angle = 360/data.length;
    const check = (way) => {
        const carou = document.getElementById("carouselTracker");
        carou.style.transform = `rotateY(${side+way}deg)`;
        setSide(side + way)
    }
    return (
        <Wrap>
            <ArrowLeft cb={() => check(angle)} />
                <OutterCard>
                    <InnerBox id="carouselTracker">
                        {
                            data.map((str, i) => <Item key={i} rotationY={angle*i} >{str}</Item>)
                        }
                    </InnerBox>
                </OutterCard>
            <ArrowRight  cb={() => check(-angle)} />
        </Wrap>
    )
}

export default Carousel;