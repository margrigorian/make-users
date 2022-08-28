import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ModeContext from '../context/mode/modeContext';
import style from "./NavBar.module.css";

export default function NavBar(props) {
    const mode = useContext(ModeContext);
    const navigate = useNavigate();
    const userId = props.userId;

    const arrNavBar = [
        {path: "/home", navBarEl: "Home"},
        {path: "/users", navBarEl: "Users"},
        {path: `/post/${userId}`, navBarEl: "Post"},
        {path: `/album/${userId}`, navBarEl: "Album"}
    ]

    return (
        <header className={style.header} style={{backgroundColor: mode === "night" ? "#1a1818" : "#ebeaea"}}>
            <button className={style.button31} onClick={() => navigate(-1)}>Navigate Back</button>
                <ul className={style.navBar}>
                    {
                        arrNavBar.map((item, i) => {
                            return <li key={`navBarEl-${i}`}>
                                        <NavLink to={`${item.path}/`} activeclassname={style.active} 

                                        style={({isActive}) => ({
                                            borderBottom: isActive ? (mode === "light" ? "1.5px solid" : "1.5px solid lightGrey") : undefined, 
                                            color: mode === "night" ? "lightGrey" : "black"})} >
                                            
                                            {item.navBarEl}
                                        </NavLink>
                                    </li>
                        })
                    }
                </ul>
                <button className={style.button} onClick={() => props.fnCnangeMode()}>{mode === "night" ? "Light Mode" : "Night Mode"}</button>
        </header>
    )
}
