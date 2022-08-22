import React, { useState } from "react";
import Album from "../album/Album";
import PhotosList from "../../photos/photosList/PhotosList";
import ModalPhotoWindow from "../modalPhotoWindow/ModalPhotoWindow";
import ModeContext from "../../context/mode/modeContext";
import s from "./AlbumsList.module.css";

// class AlbumsList extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//                         albums: true,
//                         modal: false,
//                         dataForModal: [],
//                         indexForModal: ""
//                     };

//         this.showOrHidePhotos = this.showOrHidePhotos.bind(this);
//         this.openModalPhoto = this.openModalPhoto.bind(this);
//         this.closeModal = this.closeModal.bind(this);
//     }

//     showOrHidePhotos() {
//         this.setState({...this.state, albums: !this.state.albums});
//     }

//     openModalPhoto(photos, photoIndex) {
//         this.setState({...this.state, modal: !this.state.modal, dataForModal: photos, indexForModal: photoIndex});
//     }

//     closeModal() {
//         this.setState({...this.state, modal: !this.state.modal});
//     }

//     render() {
//         return(
//             <ModeContext.Consumer>
//                 {
//                     (mode) => (
//                                 <div style={{backgroundColor: mode === "night" ? "#1a1818" : undefined}}>
//                                     <div className={s.albumHead} style={{backgroundColor: mode === "night" ? "white" : undefined}}>
//                                         <div className={s.buttonContainer}>
//                                             <div className={s.buttonUsersContainer}>
//                                                 <button className={`${s.button} ${s.buttonUsers}`} style={{backgroundColor: mode === "night" ? "#de7c03" : undefined}} onClick={() => this.props.fnBackToUsers()}>USERS</button>
//                                             </div>
//                                             <button className={`${s.button} ${s.buttonBack}`} style={{color: mode === "night" ? "black" : undefined, border: mode === "night" ? "1px solid #de7c03" : undefined}} onClick={() => this.props.fnbackToUserPage()}>&#8666; BACK</button>
//                                         </div>
//                                         <p className={s.headText} style={{color: mode === "night" ? "#de7c03" : undefined}}>ALBUM</p>
//                                     </div>
//                                     {
//                                         this.state.albums ? 
//                                             <div className={s.albumContainer}>
//                                                 {this.props.albums.map((item, i) => 
//                                                     <Album key={`AlbumId-${i}`} album={item} fn={this.showOrHidePhotos} />
//                                                 )}
//                                             </div> : <PhotosList id={this.props.albums[0].userId} fnForDrawAlbums={this.showOrHidePhotos} fnForModal={this.openModalPhoto} />
//                                     }

//                                     {
//                                         this.state.modal&&<ModalPhotoWindow photos={this.state.dataForModal} photoIndex={this.state.indexForModal} fn={this.closeModal} />
//                                     }
//                                 </div>
//                     )
//                 }
//             </ModeContext.Consumer>
//         )
//     }
// }

function AlbumsList(props) {
    const [albums, setAlbums] = useState(true);
    const [modal, setModal] = useState(false);
    const [dataForModal, setDataForModal] = useState([]);
    const [indexForModal, setIndexForModal] = useState("");

    function showOrHidePhotos() {
        setAlbums(!albums);
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
        <ModeContext.Consumer>
            {
                (mode) => (
                            <div style={{backgroundColor: mode === "night" ? "#1a1818" : undefined}}>
                                <div className={s.albumHead} style={{backgroundColor: mode === "night" ? "white" : undefined}}>
                                    <div className={s.buttonContainer}>
                                        <div className={s.buttonUsersContainer}>
                                            <button className={`${s.button} ${s.buttonUsers}`} style={{backgroundColor: mode === "night" ? "#de7c03" : undefined}} onClick={() => props.fnBackToUsers()}>USERS</button>
                                        </div>
                                        <button className={`${s.button} ${s.buttonBack}`} style={{color: mode === "night" ? "black" : undefined, border: mode === "night" ? "1px solid #de7c03" : undefined}} onClick={() => props.fnbackToUserPage()}>&#8666; BACK</button>
                                    </div>
                                    <p className={s.headText} style={{color: mode === "night" ? "#de7c03" : undefined}}>ALBUM</p>
                                </div>
                                {
                                    albums ? 
                                        <div className={s.albumContainer}>
                                            {props.albums.map((item, i) => 
                                                <Album key={`AlbumId-${i}`} album={item} fn={showOrHidePhotos} />
                                            )}
                                        </div> : <PhotosList id={props.albums[0].userId} fnForDrawAlbums={showOrHidePhotos} fnForModal={openModalPhoto} />
                                }

                                {
                                    modal&&<ModalPhotoWindow photos={dataForModal} photoIndex={indexForModal} fn={closeModal} />
                                }
                            </div>
                )
            }
    </ModeContext.Consumer>
    )
}

export default AlbumsList;