import React from 'react';
import { AnimatedTyping } from '../../../Commons/Components/AnimatedTyping';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';

function HomeComponent() {
    return (<ScreenCommon>
        <div className="h-full bg-gray-800 flex flex-col flex-1 items-center justify-center space-y-4">
            <span className="text-5xl text-white text-center text-extrabold">David Alexander Rios</span>
            <AnimatedTyping text="Desarrollador de Software Fullstack..." startFromChar={35} delay={500} className="text-white text-xl text-center" />
        </div>
    </ScreenCommon>);
}

export const Home = React.memo(HomeComponent);
