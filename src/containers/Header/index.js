import React from 'react';
import { Navwrap, Navbar, StyledA, LogoWrap, Logo } from './style';
import Link from 'next/link';

const Header = () => {
    return (
        <Navwrap>
            <LogoWrap>
                <Logo>Yassine Aitalla</Logo>
            </LogoWrap>
            <Navbar>
                <Link href="/" passHref>
                    <StyledA>about</StyledA>
                </Link>
                <Link href="/" passHref>
                    <StyledA>portfolio</StyledA>
                </Link>
                <Link href="/" passHref>
                    <StyledA>contact</StyledA>
                </Link>
            </Navbar>
        </Navwrap>
    )
}

export default Header;