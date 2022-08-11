import React from "react";
import s from "./Comment.module.css";

class Comment extends React.Component {
    render() {
        return (
            <div className={s.commentContainer}>
                <p className={s.email}>{this.props.comment.email}</p>
                <p className={s.name}>{this.props.comment.name}</p>
                <div className={s.commentText}>{this.props.comment.body}</div>
            </div>
        )
    }
}

export default Comment;