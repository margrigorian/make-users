import React from "react";
import s from "./Photo.module.css";

// class Photo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img className={s.photo} onClick={() => this.props.fn(this.props.photosWithUrl, this.props.indexForModal)} src={this.props.photo.url} alt="img" />
//             </div>
//         )
//     }
// }

function Photo(props) {
    return (
        <div>
            <img className={s.photo} onClick={() => props.fn(props.photosWithUrl, props.indexForModal)} src={props.photo.url} alt="img" />
        </div> 
    )
}

export default Photo;