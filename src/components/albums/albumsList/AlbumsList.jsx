import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import request from "../../lib/request";
import Album from "../album/Album";
import PhotosList from "../../photos/photosList/PhotosList";
import ModalPhotoWindow from "../modalPhotoWindow/ModalPhotoWindow";
import ModeContext from "../../context/mode/modeContext";
import s from "./AlbumsList.module.css";

function AlbumsList(props) {
    const mode = useContext(ModeContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [albumsData, setAlbumsData] = useState([]);
    const [albumsStatus, setAlbumsStatus] = useState(true);
    const [modal, setModal] = useState(false);
    const [dataForModal, setDataForModal] = useState([]);
    const [indexForModal, setIndexForModal] = useState("");

    useEffect(() => {
        async function getAlbums() {
            let albums = await request("GET", `https://jsonplaceholder.typicode.com/albums?userId=${id}`);
            setAlbumsData(albums);
        }

        getAlbums();

    }, [])

    function showOrHidePhotos() {
        setAlbumsStatus(!albumsStatus);
    }

    function openModalPhoto(photos, photoIndex) {
        setModal(!modal);
        setDataForModal(photos);
        setIndexForModal(photoIndex);
    }

    function closeModal() {
        setModal(!modal);
    }

    return (
        <div style={{backgroundColor: mode === "night" ? "#1a1818" : undefined}}>
            <div className={s.albumHead} style={{backgroundColor: mode === "night" ? "white" : undefined}}>
                <div className={s.buttonContainer}>
                    <div className={s.buttonUsersContainer}>
                        <button className={`${s.button} ${s.buttonUsers}`} style={{backgroundColor: mode === "night" ? "#de7c03" : undefined}} onClick={() => navigate(`/users/`)}>USERS</button>
                    </div>
                    <button className={`${s.button} ${s.buttonBack}`} style={{color: mode === "night" ? "black" : undefined, border: mode === "night" ? "1px solid #de7c03" : undefined}} onClick={() => navigate(`/userpage/${id}`)}>&#8666; BACK</button>
                </div>
                <p className={s.headText} style={{color: mode === "night" ? "#de7c03" : undefined}}>ALBUM</p>
            </div>
            {
                albumsStatus ? 
                    <div className={s.albumContainer}>
                        {albumsData.map((item, i) => 
                            <Album key={`AlbumId-${i}`} album={item} fn={showOrHidePhotos} />
                        )}
                    </div> : <PhotosList id={albumsData[0].userId} fnForDrawAlbums={showOrHidePhotos} fnForModal={openModalPhoto} />
            }

            {
                modal&&<ModalPhotoWindow photos={dataForModal} photoIndex={indexForModal} fn={closeModal} />
            }
        </div>
    )
}

export default AlbumsList;