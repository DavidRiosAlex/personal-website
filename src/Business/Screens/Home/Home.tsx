import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatedTyping } from '../../../Commons/Components/AnimatedTyping';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';
import { coffe_man } from '../../../Media';
import { Image } from '../../../Commons/Components/Image';
import { Button } from '../../../Commons/Components/Button';

function HomeComponent() {
    const writer = useCallback((type) => {
        type.typeString(' <strong>Backend</strong>')
            .pauseFor(300)
            .deleteChars(7)
            .typeString('<strong>FrontEnd</strong>')
            .pauseFor(200)
            .deleteChars(8)
            .typeString('<strong>Mobile</strong>')
            .pauseFor(200)
            .deleteChars(6)
            .typeString('<strong>FullStack</strong> ...');
    }, []);
    return (
        <ScreenCommon>
            <Swiper
                className="h-full w-full swiper-wrapper swiper swiper-container overflow-hidden"
                direction="vertical"
                effect="fade"
                cssMode
                mousewheel
            >
                <SwiperSlide className="h-full w-full bg-gray-800 flex flex-col items-center justify-start space-y-4 py-24">
                    <div className="w-1/3 h-24 flex flex-col items-center justify-center">
                        <span className="z-10 text-3xl text-white text-center text-extrabold select-none">Hello, I&apos;m</span>
                        <span className="z-10 text-4xl text-white text-center text-extrabold select-none">David Alexander Rios</span>
                    </div>
                    <div className="flex flex-row flex-auto space-x-4">
                        <Button className='border-2 text-fluor-blue border-fluor-blue rounded hover:shadow-gray-800-0.1' onPress={() => {console.log('pressed');}}>DOWNLOAD CV</Button>
                        <Button className='border-2 border-fluor-blue bg-fluor-blue rounded hover:shadow-gray-800-0.1' onPress={() => {console.log('pressed');}}>CONTACT ME</Button>
                    </div>
                    <Image src={coffe_man} className="absolute -bottom-44 min-w-300 rounded-full w-1.5/6 h-5/6 object-cover" />
                    {/* <div className='w-1/3 h-40 flex flex-col items-center justify-center'>
                        <AnimatedTyping writer={writer} text="Desarrollador" startFromChar={35} delay={500} className="z-10 select-none text-white text-xl text-center" />
                    </div> */}
                </SwiperSlide>
                <SwiperSlide className="h-full w-full flex-col items-center justify-center h-full w-full bg-white">2</SwiperSlide>
            </Swiper>
        </ScreenCommon>);
}

export const Home = React.memo(HomeComponent);
