import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
`

const Logo = () => {
    return (
        <LogoText>
            <Link to="/">
                w.
            </Link>
        </LogoText>
    )
}

export default Logo;