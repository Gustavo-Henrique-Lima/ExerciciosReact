import React from 'react';
import { NavLink } from "react-router-dom"

function Menu()
{
    return<>
        <div className="flex bg-slate-500 justify-center items-center flex-col w-screen">
            <ul className="text-white text-lg font-serif p-2 flex gap-4">
                <NavLink  class to={"/"} className="hover:underline">
                    <li>Home</li>
                </NavLink>
                <li className="hover:underline">Temporizador</li>
                <NavLink  class to={"/login"} className="hover:underline">
                    <li>Login</li>
                </NavLink>
            </ul>
        </div>
    </>
}

export default Menu;