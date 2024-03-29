import React from 'react';
import Menu from './menu';

function Login()
{
    document.title="Login";
    return(<>
        <div className="bg-slate-800 h-screen">
                <Menu/>
                <div className="flex items-center p-36 justify-center text-white font-light">
                    <div>
                        <p className="text-white text-lg">Login</p>
                    </div>
                </div>
        </div>
    </>);
}

export default Login;