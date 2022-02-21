import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatedTyping } from '../../../Commons/Components/AnimatedTyping';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';

function HomeComponent() {
    return (
        <ScreenCommon>
            <Swiper
                className="h-full w-full swiper-wrapper swiper swiper-container overflow-hidden"
                direction="vertical"
                effect="fade"
                cssMode
                mousewheel
            >
                <SwiperSlide className="h-full w-full bg-gray-800 flex flex-col items-center justify-center space-y-4">
                    <span className="text-5xl text-white text-center text-extrabold select-none">David Alexander Rios</span>
                    <AnimatedTyping text="Desarrollador de Software Fullstack..." startFromChar={35} delay={500} className=" select-none text-white text-xl text-center" />
                </SwiperSlide>
                <SwiperSlide className="h-full w-full flex-col items-center justify-center">2</SwiperSlide>
                {/*             <div className="h-screen bg-gray-800 flex flex-col items-center justify-center space-y-4">3</div>
            <div className="h-screen bg-gray-800 flex flex-col items-center justify-center space-y-4">4</div> */}
            </Swiper>
        </ScreenCommon>);
}

export const Home = React.memo(HomeComponent);
