import React from 'react';
import { HtmlIcon, CssIcon, JsIcon,
    ReactIcon, NodeJsIcon, GithubIcon
} from '../Icons';
import { IconRow } from './style';

const IconWrap = () => {
    return (
        <IconRow>
            <HtmlIcon/>
            <CssIcon/>
            <JsIcon/>
            <ReactIcon/>
            <NodeJsIcon/>
            <GithubIcon/>
        </IconRow>
    )
}

export default IconWrap;