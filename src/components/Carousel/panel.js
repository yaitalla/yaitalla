import React, { useState } from 'react';
import Link from 'next/link';
import { Item, Frame, StyledA, Title, Image } from './style';

const Panel = ({ rotationY, item, side, primary }) => {
    const mainSide = side === primary;
    const transY = mainSide ? -20 : 20;
    const scale = mainSide ? 1.2 : 0.8 ;
    return (
        <Item rotationY={rotationY} transY={transY} scale={scale}>
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

export default Panel;