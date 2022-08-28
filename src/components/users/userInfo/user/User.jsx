import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import s from "./User.module.css";
import ModeContext from "../../../context/mode/modeContext";

function User(props) {
    const mode = useContext(ModeContext);
    const navigate = useNavigate();

    function callFn() {
        props.fnGetUserId(props.user.id);
        navigate(`/userpage/${props.user.id}`);
    }

    return (
        <div className={`${s.userContainer} ${mode === "night" ? s.backColorDark : s.backColorLight}`} onClick={() => callFn()}>
            <img src="https://www.images.lesyadraw.ru/2013/06/House.jpg" alt="User" className={`${s.userPhoto} ${mode === "night" ? s.borderColor : undefined}`} />
            <p className={`${s.userName} ${mode === "night" ? s.nameColor : undefined}`}>{props.user.name}</p>
        </div>
    )
}

export default User;