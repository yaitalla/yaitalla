import React from 'react';
import { HtmlIcon, CssIcon, JsIcon, GitlabIcon,
    ReactIcon, NodeJsIcon, GithubIcon
} from '../Icons';
import { IconRow } from './style';

const IconWrap = () => {
    return (
        <IconRow>
            <HtmlIcon/>
            <GitlabIcon/>
            <JsIcon/>
            <NodeJsIcon/>
            <ReactIcon/>
            <CssIcon/>
            <GithubIcon/>
        </IconRow>
    )
}

export default IconWrap;