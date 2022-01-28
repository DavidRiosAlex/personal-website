import React from 'react';
import { Home } from './Screens/Home';

interface Route {
    component: React.FC;
    path: string;
}

export const reducers = {};
export const routes: Route[] = [
    {path: 'home', component: Home}
];
