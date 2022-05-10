import React from 'react';
import styled from "styled-components";
import Logo from './Logo';

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
`

const NavBar = styled.nav`
display: flex;
justifty-content: space-between;
align-items: center;

widtgh: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`

const Navigation = () => {
    return (
        <Section>
              <NavBar>
                  <Logo />
                  <h2>Menu</h2>
                  <h2>Button</h2>
              </NavBar>
        </Section>
    )
}

export default Navigation;