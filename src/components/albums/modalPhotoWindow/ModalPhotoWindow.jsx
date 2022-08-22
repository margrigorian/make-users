import React, { useState } from "react";
import s from "./ModalPhotoWindow.module.css";

// class ModalPhotoWindow extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             photos: this.props.photos,
//             index: this.props.photoIndex
//         };

//         this.moveForward = this.moveForward.bind(this);
//     }

//     moveForward() {
//         if(this.state.index !== this.state.photos.length - 1) {
//             this.setState({...this.state, index: this.state.index + 1})
//         };
//     }

//     moveBack() {
//         if(this.state.index !== 0) {
//             this.setState({...this.state, index: this.state.index - 1});
//         }
//     }

//     render() {
//         return (
//             <div className={s.backWindow}>
//                 <div className={s.modalWindow}>
//                     <div className={`${s.arrow} ${s.leftArrow}`} onClick={() => this.moveBack()}></div>
//                     <img src={this.state.photos[this.state.index].url} className={s.photo} alt="img" />
//                     <div className={`${s.arrow} ${s.rightArrow}`} onClick={() => this.moveForward()}></div>
//                     <div className={s.close} onClick={() => this.props.fn()}></div>
//                 </div>
//             </div>
//         )
//     }
// }

function ModalPhotoWindow(props) {
    const [photos, setPhotos] = useState(props.photos);
    const [index, setIndex] = useState(props.photoIndex);

    function moveForward() {
        if(index !== photos.length - 1) {
            setIndex(index + 1);
        }
    }

    function moveBack() {
        if(index !== 0) {
            setIndex(index - 1);
        }
    }

    return (
        <div className={s.backWindow}>
                <div className={s.modalWindow}>
                    <div className={`${s.arrow} ${s.leftArrow}`} onClick={() => moveBack()}></div>
                    <img src={photos[index].url} className={s.photo} alt="img" />
                    <div className={`${s.arrow} ${s.rightArrow}`} onClick={() => moveForward()}></div>
                    <div className={s.close} onClick={() => props.fn()}></div>
                </div>
        </div>
    )
}

export default ModalPhotoWindow;