import React from 'react';
import { NavLink } from "react-router-dom"
import {ImHome,ImEnter,ImStopwatch,ImUserCheck} from "react-icons/im";

function Menu()
{
    return<>
        <div className="flex bg-slate-500 justify-evenly items-center flex-col w-screen">
            <ul className="text-white text-lg font-serif flex">
                <NavLink  class to={"/"} className="hover:underline">
                    <li className="flex items-center flex-row justify-evenly w-20"><ImHome/>Home</li>
                </NavLink>
                <NavLink  class to={"/temp"} className="hover:underline">
                    <li className="flex items-center flex-row justify-evenly w-40"><ImStopwatch/>Temporizador</li>
                </NavLink>
                <NavLink  class to={"/login"} className="hover:underline">
                    <li className="flex items-center flex-row justify-evenly w-20"><ImEnter/>Login</li>
                </NavLink>
                <NavLink  class to={"/form"} className="hover:underline">
                    <li className="flex items-center flex-row justify-evenly w-36"><ImUserCheck/>Formulário</li>
                </NavLink>
            </ul>
        </div>
    </>
}

export default Menu;