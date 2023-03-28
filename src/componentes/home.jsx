import React from 'react';
import Menu from './menu';


function Home()
{
    return(
        <>
            <div className="bg-slate-800 h-screen">
                <Menu/>
                <div className="text-white font-light">
                    <h1 className="text-3xl p-5 text-center">Olá mundo!</h1>
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