import React from "react";
import CommentsList from "../../comments/commentsList/CommentsList";
import Post from "../post/Post";
import request from "../../lib/request";
import s from "./PostsList.module.css";

class PostsList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
                        data: [],
                        status: false
                     };

        this.showComments = this.showComments.bind(this);
        this.hideComments = this.hideComments.bind(this);
    }
    
    async showComments() {
        let comments = await request("GET", `https://jsonplaceholder.typicode.com/comments?postId=${this.props.posts[0].userId}`);
        this.setState({data: comments, status: !this.state.status});
    }

    hideComments() {
        this.setState({...this.state, status: !this.state.status});
    }
    
    render() {
        return (
            <div>
                <div className={s.header}>
                    <div className={s.buttonContainer}>
                        <div className={s.buttonUsersContainer}>
                            <button className={`${s.button} ${s.buttonUsers}`} onClick={() => this.props.fnBackToUsers()}>USERS</button>
                        </div>
                        <button className={`${s.button} ${s.buttonBack}`} onClick={() => this.props.fnBackToUserPage()}>&#8666; BACK</button>
                    </div>
                    <p className={s.headerText}>POSTS</p>
                </div>
                <div className={s.bigContainer}>
                    {this.props.posts.map((item, i) => 
                        <Post key={`PostId-${i}`} post={item} fn={this.showComments} />
                    )}
                </div>
                
                {this.state.status&&<CommentsList comments={this.state.data} fn={this.hideComments} />}
            </div>
        )
    }
}

export default PostsList;