import React, { useContext } from "react";
import ModeContext from "../../context/mode/modeContext";
import s from "./Post.module.css";

function Post(props) {
    const mode = useContext(ModeContext);

    return (
        <div>
            <div className={s.postContainer} style={{backgroundColor: mode === "night" ? "#191919" : undefined}} onClick={() => props.fn(props.post.userId)}>
                <p className={s.title} style={{color: mode === "night" ? "#84a3b4" : undefined}}>{props.post.title}</p>
                <p className={s.text} style={{color: mode === "night" ? "lightGrey" : undefined, fontSize: mode === "night" ? "13px" : undefined}}>{props.post.body}</p>
            </div>
        </div>
    )
}

export default Post;