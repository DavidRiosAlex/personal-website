import React from 'react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
    return <><div className="bg-900-red w-screen h-screen">HOME</div> <Outlet/></>
}
