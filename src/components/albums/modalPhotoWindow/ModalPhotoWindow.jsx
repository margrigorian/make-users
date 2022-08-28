import React, { useState } from "react";
import s from "./ModalPhotoWindow.module.css";

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