import React, {useState} from 'react';
import LocalNavBtn from '../../components/LocalNavBtn';
import { Wrap, Text, Side } from './style';

const TextNav = ({ visu, offset, cb}) => {
    const show = () => {
        const icons = document.getElementsByClassName('Ani')
        const opened = icons[0].classList.contains('opened')
        if (!opened){
            for (let i=0; i<7; i++){
                icons[i].classList.add('opened')
                icons[i].classList.remove('closed')
            }
        } else {
            for (let i=0; i<7; i++){
                icons[i].classList.add('closed')
                icons[i].classList.remove('opened')
            } 
        }

    }
    return (
        <Wrap visu={visu} slide={offset}>
                <Text className={"textinfo"}>Build modern web applications</Text>
                <Text className={"textinfo"}>Secure and fast websites</Text>
                <Text className={"textinfo"}>Progressive webapps</Text>
                <Text onClick={()=>show()} className={"textinfo"}>
                    Using the latest technologies
                    {/* <F>{"<-"}</F> */}
                </Text>
            <Side className={"textinfo"} visu={visu} >
                <LocalNavBtn cb={cb} content='back' />
            </Side>
        </Wrap>
    )
}

export default TextNav;