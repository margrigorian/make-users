import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ModeContext from "../../context/mode/modeContext";
import request from "../../lib/request";
import CommentsList from "../../comments/commentsList/CommentsList";
import Post from "../post/Post";
import s from "./PostsList.module.css";

function PostsList(props) {
    const mode = useContext(ModeContext);
    const [postData, setPostData] = useState([]);
    const [commentsData, setCommentsData] = useState([]);
    const [status, setStatus] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            let posts = await request("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            setPostData(posts);
        }

        getPosts();

    }, []);

    async function showComments() {
        let comments = await request("GET", `https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        setCommentsData(comments);
        setStatus(!status);
    }

    function hideComments() {
        setStatus(!status);
    }

    return (
        <div style={{backgroundColor: mode === "night" ? "lightGrey" : undefined}}>
            <div className={`${s.header} ${mode === "night" ? s.headerDarkImg : s.headerLightImg}`} >
                <div className={s.buttonContainer}>
                    <div className={s.buttonUsersContainer}>
                        <button className={`${s.button} ${s.buttonUsers}`} style={{backgroundColor: mode === "night" ? "#094769" : undefined}} onClick={() => navigate(`/users/`)}>USERS</button>
                    </div>
                    <button className={`${s.button} ${s.buttonBack}`} style={{color: mode === "night" ? "#094769" : undefined}} onClick={() => navigate(`/userpage/${id}`)}>&#8666; BACK</button>
                </div>
                <p className={s.headerText} style={{color: mode === "night" ? "#094769" : undefined}}>POSTS</p>
            </div>
            <div className={s.bigContainer}>
                {postData.map((item, i) => 
                    <Post key={`PostId-${i}`} post={item} fn={showComments} />
                )}
            </div>
            
            {status&&<CommentsList comments={commentsData} fn={hideComments} />}
        </div>
    )
}

export default PostsList;