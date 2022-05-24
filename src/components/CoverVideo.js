import React from "react";
import styled from "styled-components";
import GIF from "../assets/Home Video.mp4";
import png from "../assets/Nfts/astro.png"

const VideoContainer = styled.div`
    width: 100%;

    video{
        height: auto;
        width: 100%
    }
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <img src={png} />
        </VideoContainer>
    );
}

export default CoverVideo;