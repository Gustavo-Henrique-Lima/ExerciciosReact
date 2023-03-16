import React from 'react';
import Menu from './menu';

function Login()
{

    return(<>
        <Menu/>
        <div className="flex bg-slate-400 justify-center items-center">
            <p className="text-white text-lg">Login</p>
        </div>
    </>);
}

export default Login;