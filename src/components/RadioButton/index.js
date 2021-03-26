import React, {useState} from 'react';
import { Wrap, Switch, Input, Label,
    ToggleSwitch, ToggleWrap
} from './style';

const RadioButton = () => {
    return (
        <Wrap className="toggle-switch" >
            <Switch>
                <Input type="radio" checked="checked" />
                <Label>On</Label>
                <Input type="radio" />
                <Label>Off</Label>
                <ToggleWrap className="toggle-wrapper" >
                    <ToggleSwitch className="toggle-switch" ></ToggleSwitch>
                </ToggleWrap>
            </Switch>
        </Wrap>
    )
}

export default RadioButton;