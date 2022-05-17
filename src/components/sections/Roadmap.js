import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import DrawSvg from './Roadmap/DrawSvg';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;
`

const Title = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    border-bottom: 2px solid ${(props) => props.theme.text};
    width: fit-content;
`

const Container = styled.div`
    width: 70%;
    height: 200vh;
    background-color: ${(props) => props.theme.body};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Items = styled.ul`
    list-style:none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;

    &>*:nth-of-type(2n +1){
        justify-content: start;

        div{
            border-radius: 50px 0 50px 0;
            text-align:right;
        }
        p{
            border-radius: 40px 0 40px
        }
    }
    &>*:nth-of-type(2n){
        justify-content: end;
        div{
            border-radius: 0 50px 0 50px;
            text-align:left;
        }
        p{
            border-radius: 0 40px 0 40px;
        }
    }
`

const Item = styled.li`
    width: 100%;
    height: 100%;
    display: flex;
`

const ItemContainer = styled.div`
    width: 40%;
    height: fit-content;
    padding: 1rem;
    border: 3px solid ${props => props.theme.text};
`

const Box = styled.p`
    height: fit-content;
    background-color: ${props => props.theme.carouselColor};
    color: ${props => props.theme.text};
    padding: 1rem;
    position: relative;
    border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
    display: block;
    font-size: ${props => props.theme.fontxl};
    color: ${props => props.theme.text};
`;

const Text = styled.span`
    display: block;
    font-size: ${props => props.theme.fontsm};
    color: ${props => props.theme.text};

    font-weight:400;
    margin: 0.5rem 0;
`;

const RoadmapItem = ({title, subtext, addToRef}) => {
    return(
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title} </SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}

const Roadmap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger)

    const addToRefs = (el) => {
        if(el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    }

    useLayoutEffect(() => {
        console.log(revealRefs);
        let t1 = gsap.timeline();
        revealRefs.current.forEach( (el, index) => {
            t1.fromTo(
                el.childNodes[0], {
                    y: '0'
                },{
                    y: '-30%',

                    scrollTrigger:{
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: 'top center+=200px',
                        end: 'bottom center',
                        scrub:true,
                        markers:true,
                    }
                }
            )
        })

        return () => {

        };
    }, [])

    return (
        <Section>
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item> {/* Empty item */}
                        <RoadmapItem addToRef={addToRefs} title="NFT Drop" subtext="We'll be dropping a series of collectibles that will be part of the Star Sailors Cinematic Universe as eco-friendly NFTs. These tokens will provide real-world utility in the maingame, and come with a collection of in-universe minigames too!" />
                        <RoadmapItem addToRef={addToRefs} title="ERC20 Token" subtext="Staking possibilities will open up with the debut of our token, which will allow for the creation of a community DAO for all holders. Each token will hold a piece of the initial data that will be seen in section 4" />
                        <RoadmapItem addToRef={addToRefs} title="Community builds" subtext="This phase is all about our community. In addition to our Kickstarter campaign, we'll be creating a collection of NFTs with the help of everyone who's held our tokens in the past (or those under 18 subscribed to our mailing list). Minigames will continue to be updated, with the first chapter of the Star Sailors game being released." />
                        <RoadmapItem addToRef={addToRefs} title="Citizen science" subtext="Your actions in-game will now bring about in-game rewards as a thankyou for contributing to real world science. Our game will draw in data from APIs like the Zooniverse Panoptes project so that by playing our game, you can help push humanity forward and gain an understanding of science along the way." />
                        <RoadmapItem addToRef={addToRefs} title="Full DAO Integration" subtext="No more will you be required to be on your computer to contribute - our DAO will feature mobile-friendly minigames and direct access to Zooniverse surveys" />
                        <RoadmapItem addToRef={addToRefs} title="Cross-chain support" subtext="Other chains like Solana will be directly integrated with your in-game account. And there's still even more to come in 2023." />
                </Items>
            </Container>
        </Section>
    )
}

export default Roadmap;