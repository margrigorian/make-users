import React from "react";
import request from "../../lib/request";
import PostsList from "../../posts/postsList/PostsList";
import AlbumsList from "../../albums/albumsList/AlbumsList";
import ModeContext from "../../context/mode/modeContext";
import s from "./UserPage.module.css";

class UserPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
                        data: [],
                        status: ""
                     };

        this.backToUserPage = this.backToUserPage.bind(this);
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

    backToUserPage() {
        this.setState({
                        data: [],
                        status: ""
                     });
    }

    render() {
        return (
            <ModeContext.Consumer>
                {
                    (mode) => (
                            <div className={s.body}>
                                {this.state.status === "" ? 
                                    <div style={{backgroundColor: mode === "night" ? "#0a0a0a" : undefined}}>
                                        <button className={s.buttonBack} onClick={() => this.props.fnComeBack()} style={{backgroundColor: mode === "night" ? "#470404" : undefined, color: mode === "night" ? "white" : undefined}}>&#8666; BACK</button>
                                        <div className={s.userContainer} style={{backgroundColor: mode === "night" ? "#cccaca" : undefined}}>
                                            <div>
                                                <img src={mode === "night" ? "https://i.gifer.com/Cag6.gif" : "http://26.media.tumblr.com/tumblr_ltusgeaJ8H1qf9jcfo1_500.gif"} alt="User" className={s.userPhoto}/>
                                                <p className={s.userName} style={{color: mode === "night" ? "darkRed" : undefined}}>{this.props.userInfo.name}</p>
                                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>User Name: </span>{this.props.userInfo.username}</p>
                                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>Email: </span>{this.props.userInfo.email}</p>
                                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>Phone: </span>{this.props.userInfo.phone}</p>
                                                <p style={{color: mode === "night" ? "darkRed" : undefined}}><span className={s.colorText} style={{color: mode === "night" ? "#1a1818" : undefined}}>Address: </span>{this.props.userInfo.address.street}</p>
                                            </div>
                                            <div>
                                                <button className={s.button} style={{backgroundColor: mode === "night" ? "#470404" : undefined, border: mode === "night" ? "1px solid darkRed" : undefined}} onClick={() => this.getPosts(this.props.userInfo.id, "posts")}>POST</button>
                                                <button className={s.button} onClick={() => this.getAlbums(this.props.userInfo.id, "albums")}>ALBUM</button>
                                            </div>
                                        </div>
                                    </div> : 
                                        (this.state.status === "posts" ? <PostsList posts={this.state.data} fnBackToUsers={this.props.fnComeBack} fnBackToUserPage={this.backToUserPage} /> 
                                            : <AlbumsList albums={this.state.data} fnBackToUsers={this.props.fnComeBack} fnbackToUserPage={this.backToUserPage}/>)
                                }
                            </div>
                    )
                }
            </ModeContext.Consumer>
        )
    }
}

export default UserPage;