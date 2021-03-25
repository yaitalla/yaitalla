import React from 'react';
import { Wrap, Picture} from './style';

const LeftPortrait = ({cb}) => {
    return (
        <Wrap onClick={cb}>
            <Picture src={'/netero.jpg'} />
        </Wrap>
    )
}

export default LeftPortrait;