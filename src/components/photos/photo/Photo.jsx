import React from "react";
import s from "./Photo.module.css";

function Photo(props) {
    return (
        <div>
            <img className={s.photo} onClick={() => props.fn(props.photosWithUrl, props.indexForModal)} src={props.photo.url} alt="img" />
        </div> 
    )
}

export default Photo;