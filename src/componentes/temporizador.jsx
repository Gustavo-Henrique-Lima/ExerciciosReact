import React from 'react';
import Menu from './menu';

function Temporizador()
{

    return(<>
        <Menu/>
        <div className="flex bg-slate-400 justify-center items-center">
            <p className="text-white text-lg">Temporizador</p>
        </div>
    </>);
}

export default Temporizador;