import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import ModeContext from "../../context/mode/modeContext";
import request from "../../lib/request";
import s from "./UserPage.module.css";

function UserPage(props) {
    const mode = useContext(ModeContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(null);
    
    useEffect(() => {
        async function getUser() {
            let user = await request("GET", `https://jsonplaceholder.typicode.com/users?id=${id}`);
            setUserInfo(user[0]);
        }

        getUser();

    }, []);
    
    return (
        <div className={s.body}>
            {
                userInfo && (
                    <div style={{backgroundColor: mode === "night" ? "#0a0a0a" : undefined}}>
                        <button className={s.buttonBack} onClick={() => navigate(`/users/`)} style={{backgroundColor: mode === "night" ? "#470404" : undefined, color: mode === "night" ? "white" : undefined}}>&#8666; BACK</button>
                        <div className={s.userContainer} style={{backgroundColor: mode === "night" ? "#cccaca" : undefined}}>
                            <div>
                                <img src={mode === "night" ? "https://i.gifer.com/Cag6.gif" : "http://26.media.tumblr.com/tumblr_ltusgeaJ8H1qf9jcfo1_500.gif"} alt="User" className={s.userPhoto}/>
                                <p className={s.userName} style={{color: mode === "night" ? "darkRed" : undefined}}>{userInfo.name}</p>
                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>User Name: </span>{userInfo.username}</p>
                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>Email: </span>{userInfo.email}</p>
                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>Phone: </span>{userInfo.phone}</p>
                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>Address: </span>{userInfo.address.street}</p>
                            </div>
                            <div>
                                <NavLink to={`/post/${userInfo.id}`}><button className={s.button} style={{backgroundColor: mode === "night" ? "#470404" : undefined, border: mode === "night" ? "1px solid darkRed" : undefined}}>POST</button></NavLink>
                                <NavLink to={`/album/${userInfo.id}`}><button className={s.button} style={{backgroundColor: mode === "night" ? "#470404" : undefined, border: mode === "night" ? "1px solid darkRed" : undefined}}>ALBUM</button></NavLink>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default UserPage;