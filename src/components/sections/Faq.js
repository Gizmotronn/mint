import React from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.body};
    position: relative;

    display: flex
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontxxl};
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    
    margin: 1 rem auto;
    border-bottom: 2px solid ${(props) => props.theme.text};
    width: fit-content;
`;

const Container = styled.div`
    width: 75%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-content: center;
`

const Box = styled.div`
    width: 45%;
`

const Faq = () => {
    return (
        <Section>
            <Title>Faq</Title>
            <Container>
                <Box>
                    <Accordion title="This is a frequently asked question">This is the answer to the question</Accordion>
                    <Accordion title="This is a frequently asked question">This is the answer to the question</Accordion>
                    <Accordion title="This is a frequently asked question">This is the answer to the question</Accordion>
                </Box>
                <Box>
                <Accordion title="This is a frequently asked question">This is the answer to the question</Accordion>
                <Accordion title="This is a frequently asked question">This is the answer to the question</Accordion>
                <Accordion title="This is a frequently asked question">This is the answer to the question</Accordion>
                </Box>
            </Container>
        </Section>
    )
}

export default Faq;