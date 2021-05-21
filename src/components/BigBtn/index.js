import React from 'react';
import { Wrap, BtnFrame, Button, A } from './style';


const BigButton = () => {
    return (
        <Wrap>
            <BtnFrame>
                <Button>
                    <A rel="noreferrer" href={"https://yaitalla.github.io/Resume"} target={"_blank"}>Curriculum</A>
                </Button>
            </BtnFrame>
        </Wrap>
    )
}

export default BigButton;