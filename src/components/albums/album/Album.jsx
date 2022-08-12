import React from "react";
import s from "./Album.module.css";

class Album extends React.Component{
    render() {
        return (
            <div>
                <div className={s.album} onClick={() => this.props.fn()}>
                    <p className={s.title}>{this.props.album.title}</p>
                </div>
            </div>
        )
    }
}

export default Album;