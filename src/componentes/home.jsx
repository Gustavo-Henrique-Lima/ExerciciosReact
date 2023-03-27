import React from 'react';
import Menu from './menu';


function Home()
{
    return(
        <>
            <Menu/>
            <div className="bg-slate-400 flex justify-center text-white font-light h-screen w-screen">
                <div>
                    <h1 className="text-3xl flex justify-center items-center p-2">Olá mundo!</h1>
                    <p className="text-xl text-center p-2">Esta aplicação React tem por objetivo armazenar todas as<br></br>atividades
                    que foram propostas ao longo da disciplina de React<br></br> 
                    ministrada pelo professor Jobson Tenório ao longo do projeto<br></br>
                    MouraTech.</p>
                </div>
            </div>
        </>
    );
}

export default Home;