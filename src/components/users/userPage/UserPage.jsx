import React from "react";
import request from "../../lib/request";
import PostsList from "../../posts/postsList/PostsList";
import AlbumsList from "../../albums/albumsList/AlbumsList";
import s from "./UserPage.module.css";

class UserPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
                        data: [],
                        status: ""
                     };

        this.getPosts = this.getPosts.bind(this); // работает и без bind, почему?
        this.getAlbum = this.getAlbums.bind(this); // работает и без bind, почему?
    }

    async getPosts(id, status) {
        let posts = await request("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        this.setState({
                        data: posts,
                        status
                     });
    }

    async getAlbums(id, status) {
        let albums = await request("GET", `https://jsonplaceholder.typicode.com/albums?userId=${id}`);
        this.setState({
                        data: albums,
                        status
                     });
    }

    render() {
        return (
            <div>
                {this.state.status === "" ? 
                    <div className={s.userContainer}>
                        <div>
                            <img src="http://26.media.tumblr.com/tumblr_ltusgeaJ8H1qf9jcfo1_500.gif" alt="User" className={s.userPhoto}/>
                            <p className={s.userName}>{this.props.userInfo.name}</p>
                            <p><span className={s.colorText}>User Name: </span>{this.props.userInfo.username}</p>
                            <p><span className={s.colorText}>Email: </span>{this.props.userInfo.email}</p>
                            <p><span className={s.colorText}>Phone: </span>{this.props.userInfo.phone}</p>
                            <p><span className={s.colorText}>Address: </span>{this.props.userInfo.address.street}</p>
                        </div>
                        <div>
                            <button className={s.button} onClick={() => this.getPosts(this.props.userInfo.id, "posts")}>POST</button>
                            <button className={s.button} onClick={() => this.getAlbums(this.props.userInfo.id, "albums")}>ALBUM</button>
                        </div>
                    </div> : 
                        (this.state.status === "posts" ? <PostsList posts={this.state.data} /> : <AlbumsList albums={this.state.data} />)
                }
            </div>
        )
    }
}

export default UserPage;