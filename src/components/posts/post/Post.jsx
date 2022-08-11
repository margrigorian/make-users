import React from "react";
import s from "./Post.module.css";

class Post extends React.Component{
    render() {
        return(
            <div>
                <div className={s.postContainer} onClick={() => this.props.fn(this.props.post.userId)}>
                    <p className={s.title}>{this.props.post.title}</p>
                    <p className={s.text}>{this.props.post.body}</p>
                </div>
            </div>
        )
    }
}

export default Post;