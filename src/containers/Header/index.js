import React from 'react';
import { Navwrap, Navbar, StyledA, LogoWrap, Logo } from './style';
import Link from 'next/link';
import DivLogo from '../../components/LogoDiv';

const Header = () => {
    return (
        <Navwrap>
            <LogoWrap>
                <DivLogo/>
            </LogoWrap>
            <Navbar>
            </Navbar>
        </Navwrap>
    )
}

export default Header;