import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    cursor: pointer;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${props => props.theme.carouselColor};
    margin: 3rem 0;
`

const Title = styled.div`
    font-size: ${props => props.theme.fontsm};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Reveal = styled.div`
    display: ${props => props.clicked ? 'block' : 'none'};
    margin-top: 1rem;
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: ${props => props.theme.fontsm};
    font-weight: 300;
    line-height: 1.1rem;
`

const Accordion = ({title, children}) => {
    const [collapse, setCollapse] = useState(second)

    return (
        <Container>
            <Title onClick={() => setCollapse(!collapse)}>
                <Name>
                    <span>{title}</span>
                </Name>
                {
                    collapse ?
                    <Indicator>-</Indicator> : <Indicator>-</Indicator>
                }
            </Title>
            <Reveal clicked={collapse}>
                {children}
            </Reveal>
        </Container>
    )
}

export default Accordion;