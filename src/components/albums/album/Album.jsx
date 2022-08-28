import React, { useContext } from "react";
import ModeContext from "../../context/mode/modeContext";
import s from "./Album.module.css";

function Album(props) {
    const mode = useContext(ModeContext);

    return (
        <div>
            <div className={`${s.album} ${mode === "night" ? s.imgForDarkMode : s.imgForLightMode}`} onClick={() => props.fn()}>
                <p className={s.title} style={{marginTop: mode === "night" ? "35px" : undefined}}>{props.album.title}</p>
            </div>
        </div>
    )
}

export default Album;