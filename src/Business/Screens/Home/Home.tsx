import React from 'react';
import { ScreenCommon } from '../../../Commons/Components/ScreenCommon';

function HomeComponent() {
    return (<ScreenCommon>
        <div className="h-full bg-gray-800 flex flex-col flex-1 items-center justify-center space-y-4">
            <span className="text-5xl text-white text-center text-extrabold">David Alexander Rios</span>
            <span className="text-white text-xl text-center">Desarrollador de Software Fullstack</span>
            {/*             <div className="flex flex-row space-x-4">
                <span className="text-white">Backend</span>
                <span className="text-white">FrontEnd</span>
                <span className="text-white">Mobile</span>
            </div> */}
        </div>
    </ScreenCommon>);
}

export const Home = React.memo(HomeComponent);
