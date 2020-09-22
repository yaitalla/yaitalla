import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from './arrows';
import { Wrap, Item,
    OutterCard,
    InnerBox
} from './style';

const Carousel = () => {
    const [side, setSide] = useState('one');
    const data = ["tests", "docs", "gps", "template", "file convertor", "library"]
    const angle = (360/data.length);
    return (
        <Wrap>
            <ArrowLeft/>
                <OutterCard>
                    <InnerBox id="carouselTracker">
                        {
                            data.map((str, i) => <Item key={i} rotationY={(360/data.length)*i} >{str}</Item>)
                        }
                    </InnerBox>
                </OutterCard>
            <ArrowRight  />
        </Wrap>
    )
}

export default Carousel;