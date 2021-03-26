import styled from 'styled-components';

export const Wrap = styled.div`
    margin: 0 auto;
	border: 1px solid silver;
`;
export const Switch = styled.div`
        position: relative;
		text-transform: uppercase;
		width: 24em;
`;
export const Input = styled.input`
    height: 3em;
    width: 6em;
    left: 6em;
    margin: 0;
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: 2;
`;
export const Label = styled.label`
    color: white;
    cursor: pointer;
    opacity: 0.33;
    transition: opacity 0.25s ease;
    font-size: 1.5em;
    display: inline-block;
    line-height: 2;
    margin: 0;
    text-align: center;
    width: 4em;
    height: 100%;
`;
export const ToggleWrap = styled.span`

    border-radius: 2em;
    height: 100%;
    padding: 0.25em;
    overflow: hidden;
    transition: 0.25s ease all;
`;
export const ToggleSwitch = styled.span`
    background: white;
    border-radius: 100%;
    position: absolute;
    transition: 0.25s ease all;
    height: 2.5em;
		width: 2.5em;
`;