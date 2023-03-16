import React from 'react';
import Menu from './menu';

function Home()
{

    return(
        <>
            <Menu/>
            <div className="flex bg-slate-400 justify-center items-center w-screen">
                <p className="text-white text-lg">Olá mundo</p>
            </div>
        </>
    );
}

export default Home;