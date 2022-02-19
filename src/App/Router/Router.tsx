import React, {memo} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {routes} from '../../Business';

interface RouterProps {
    children?: Element;
}

export const Router = memo(({children}: RouterProps) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className="bg-gray-800 h-screen w-screen"></div>} />
                {routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
});
