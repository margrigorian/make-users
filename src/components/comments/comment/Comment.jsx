import React, { useContext } from "react";
import ModeContext from "../../context/mode/modeContext";
import s from "./Comment.module.css";

function Comment(props) {
    const mode = useContext(ModeContext);

    return (
        <div className={s.commentContainer}>
            <p className={s.email}>{props.comment.email}</p>
            <p className={s.name}>{props.comment.name}</p>
            <div className={s.commentText} style={{backgroundColor: mode === "night" ? "#303030" : undefined}}>{props.comment.body}</div>
        </div>
    )
}

export default Comment;         