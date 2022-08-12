import React from "react";
import request from "../../lib/request";
import Photo from "../photo/Photo";
import s from "./PhotosList.module.css";

class PhotosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                        status: false,
                        data: []
                     };
    }

    async componentDidMount() {
        let photos = await request("GET", `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.id}`);
        this.setState({...this.state, data: photos});
    }

    render() {
        return (
            <div className={s.photosContainer}>
                <button className={s.button} onClick={() => this.props.fnForDrawAlbums()}>ALBUM</button>
                {this.state.data.map((item, i) => <Photo key={`PhotoId-${i}`} photo={item} fn={this.props.fnForModal} photosWithUrl={this.state.data} indexForModal={i} />)}
            </div>

        )
    }
}

export default PhotosList;