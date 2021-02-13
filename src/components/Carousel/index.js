import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from './arrows';
import { Wrap, Item, Title, Image,
    OutterCard, Frame, StyledA,
    InnerBox
} from './style';
import Data from './data';

const Side = ({ rotationY, item }) => {
    return (
        <Item rotationY={rotationY} >
            <Frame>
                <Link passHref href={item.dest}>
                    <StyledA target={'_blank'}>
                        <Title>{item.title}</Title>
                    </StyledA>
                </Link>
                <Image className={item.cn} src={item.imgSrc} />
            </Frame>
        </Item>
    )
}

const Carousel = () => {
    const [side, setSide] = useState(0);
    const angle = 360/Data.length;
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
                            Data.map((item, i) => <Side key={i} rotationY={angle*i} item={item} />)
                        }
                    </InnerBox>
                </OutterCard>
            <ArrowRight  cb={() => check(-angle)} />
        </Wrap>
    )
}

export default Carousel;