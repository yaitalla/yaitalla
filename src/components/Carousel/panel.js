import React, { useState } from 'react';
import Link from 'next/link';
import { Item, Frame, StyledA, Title, Image } from './style';

const Panel = ({ rotationY, item }) => {
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

export default Panel;