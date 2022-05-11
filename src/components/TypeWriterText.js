import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize; 
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
}
.text-1{
    color: blue;
}
`; // Should probably remove the capitalization later

const TypeWriterText = () => {
    return (
        <Title>
            Discover the Star Sailor 
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('<span class="text-1">Within you</span>')
                        .callFunction(() => {
                            console.log('String typed out!');
                        })  
                        .pauseFor(2500)
                        .deleteAll()
                        //.pauseFor(2000)
                        //.typeString('Part Two, text 2 span')
                        .callFunction(() => {
                            console.log('All strings were deleted!');
                        })
                        .start();
                }}
            />
        </Title>
    )
}

export default TypeWriterText;