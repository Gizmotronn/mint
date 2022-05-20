import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
// import Banner from '../Banner'
import Logo from '../Logo'

import Facebook from '../../Icons/Facebook'
import Instagram from '../../Icons/Instagram'
import Twitter from '../../Icons/Twitter'
import LinkedIn from '../../Icons/LinkedIn'
import Loading from '../Loading'

const Banner = lazy(() => import("../Banner"));


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};

display: flex;
/* justify-content: center; */
/* align-items: center; */
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};

@media (max-width: 48em) {
width: 90%;

h1{
font-size: ${props => props.theme.fontxxxl};

}
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
width: 100%;
}
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`
const MenuItems = styled.ul`
list-style:none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;

@media (max-width: 48em) {
display: none;
}
`
const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration:underline;
}
@media (max-width: 48em) {
flex-direction: column;
width: 100%;

span{
  margin-bottom: 1rem;
}
}
`

const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);
  
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  
  return (
    <Section>
      
<Suspense fallback={<Loading />}>
<Banner /> </Suspense>

      <Container>
    <Left> 
    <Logo />
    <IconList>
      <a href="http://github.com/signal-k" target='_blank' 
      rel="noopener noreferrer"
      aria-label='facebook'
      >
        <Facebook />
      </a>
      <a href="https://www.instagram.com/droidology/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='instagram'
      >
        <Instagram />
      </a>
      <a href="https://twitter.com/TheMrScrooby" target='_blank' 
      rel="noopener noreferrer"
      aria-label='twitter'
      >
        <Twitter />
      </a>
      <a href="http://linkedin.com/in/liam-arbuckle-8bb257188" target='_blank' 
      rel="noopener noreferrer"
      aria-label='linkedin'
      >
        <LinkedIn />
      </a>
    </IconList>
    </Left>
    <MenuItems>
    <Item onClick={() => scrollTo('home')}  >Home</Item>
          <Item onClick={() => scrollTo('about')}  >About</Item>
          <Item onClick={() => scrollTo('roadmap')}  >Roadmap</Item>
          <Item onClick={() => scrollTo('showcase')}  >Showcase</Item>
          <Item onClick={() => scrollTo('team')}  >Team</Item>
          <Item onClick={() => scrollTo('faq')}  >Faq</Item>

    </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Star Sailors & Signal Kinetics 2022. All rights reserved.
        </span>
        <span>
          Made with &#10084; by <a href="http://la7.dev" target="_blank"  rel="noopener noreferrer">
            Liam Arbuckle, CTO & Co-Founder of Signal Kinetics & Lead Engineer of Star Sailors
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer