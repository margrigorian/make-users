import React from "react";
import Album from "../album/Album";
import PhotosList from "../../photos/photosList/PhotosList";
import ModalPhotoWindow from "../modalPhotoWindow/ModalPhotoWindow";
import s from "./AlbumList.module.css";

class AlbumsList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
                        albums: true,
                        modal: false,
                        dataForModal: [],
                        indexForModal: ""
                    };

        this.showOrHidePhotos = this.showOrHidePhotos.bind(this);
        this.openModalPhoto = this.openModalPhoto.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showOrHidePhotos() {
        this.setState({...this.state, albums: !this.state.albums});
    }

    openModalPhoto(photos, photoIndex) {
        this.setState({...this.state, modal: !this.state.modal, dataForModal: photos, indexForModal: photoIndex});
    }

    closeModal() {
        this.setState({...this.state, modal: !this.state.modal});
    }

    render() {
        return(
            <div>
                <div className={s.albumHead}>
                    <div className={s.buttonContainer}>
                        <div className={s.buttonUsersContainer}>
                            <button className={`${s.button} ${s.buttonUsers}`} onClick={() => this.props.fnBackToUsers()}>USERS</button>
                        </div>
                        <button className={`${s.button} ${s.buttonBack}`} onClick={() => this.props.fnbackToUserPage()}>&#8666; BACK</button>
                    </div>
                    <p className={s.headText}>ALBUM</p>
                </div>
                {
                    this.state.albums ? 
                        <div className={s.albumContainer}>
                            {this.props.albums.map((item, i) => 
                                <Album key={`AlbumId-${i}`} album={item} fn={this.showOrHidePhotos} />
                            )}
                        </div> : <PhotosList id={this.props.albums[0].userId} fnForDrawAlbums={this.showOrHidePhotos} fnForModal={this.openModalPhoto} />
                }

                {
                    this.state.modal&&<ModalPhotoWindow photos={this.state.dataForModal} photoIndex={this.state.indexForModal} fn={this.closeModal} />
                }
            </div>
        )
    }
}

export default AlbumsList;