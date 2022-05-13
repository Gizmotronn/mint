import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../../assets/Nfts/bighead.svg"
import img2 from "../../../assets/Nfts/bighead-1.svg"
import img3 from "../../../assets/Nfts/bighead-2.svg"
import img4 from "../../../assets/Nfts/bighead-3.svg"
import img5 from "../../../assets/Nfts/bighead-4.svg"
import img6 from "../../../assets/Nfts/bighead-5.svg"
import img7 from "../../../assets/Nfts/bighead-6.svg"
import img8 from "../../../assets/Nfts/bighead-7.svg"
import img9 from "../../../assets/Nfts/bighead-8.svg"
import img10 from "../../../assets/Nfts/bighead-9.svg"

const Container = styled.div`
width: 25vw;
height: 70vh;

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}
`

const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction:false,
                }}
                pagination={{
                    type:'fraction',
                }}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={img1} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img2} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img3} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img4} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img5} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img6} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img7} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img8} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img9} alt="The Star Sailors" /> </SwiperSlide>
                <SwiperSlide> <img src={img10} alt="The Star Sailors" /> </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel;