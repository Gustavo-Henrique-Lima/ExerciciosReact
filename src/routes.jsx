import React from 'react';
import Home from "./componentes/home";
import Login from './componentes/login';

const routes=[
    { path: '/', element: <Home/> },
    { path: '/login', element: <Login/> },
];

export default routes;