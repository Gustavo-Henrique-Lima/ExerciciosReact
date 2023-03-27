import React from 'react';
import Formulario from './componentes/formulario';
import Home from "./componentes/home";
import Login from './componentes/login';
import Temporizador from './componentes/temporizador';

const routes=[
    { path: '/', element: <Home/> },
    { path: '/login', element: <Login/> },
    { path: '/temp', element: <Temporizador/>},
    { path: '/form', element: <Formulario/> },
];

export default routes;