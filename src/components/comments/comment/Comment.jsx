import React from "react";
import ModeContext from "../../context/mode/modeContext";
import s from "./Comment.module.css";

class Comment extends React.Component {
    render() {
        return (
            <ModeContext.Consumer>
                {
                    (mode) => (
                                <div className={s.commentContainer}>
                                    <p className={s.email}>{this.props.comment.email}</p>
                                    <p className={s.name}>{this.props.comment.name}</p>
                                    <div className={s.commentText} style={{backgroundColor: mode === "night" ? "#303030" : undefined}}>{this.props.comment.body}</div>
                                </div>
                    )
                }
            </ModeContext.Consumer>
        )
    }
}

export default Comment;         