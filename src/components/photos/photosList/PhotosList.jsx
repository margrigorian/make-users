import React, { useEffect, useState } from "react";
import request from "../../lib/request";
import Photo from "../photo/Photo";
import ModeContext from "../../context/mode/modeContext";
import s from "./PhotosList.module.css";

function PhotosList(props) {
    const [status, setStatus] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let photos = await request("GET", `https://jsonplaceholder.typicode.com/photos?albumId=${props.id}`);
            setData(photos);
        }

        getData();
    }, [])

    return (
        <ModeContext.Consumer>
                {
                    (mode) => (
                                <div className={s.photosContainer}>
                                    <button className={s.button} style={{backgroundColor: mode === "night" ? "#de7c03" : undefined, color: mode === "night" ? "black" : undefined, border: mode === "night" ? "1px solid #de7c03" : undefined,}} onClick={() => props.fnForDrawAlbums()}>ALBUM</button>
                                    {data.map((item, i) => <Photo key={`PhotoId-${i}`} photo={item} fn={props.fnForModal} photosWithUrl={data} indexForModal={i} />)}
                                </div>
                    )
                }
        </ModeContext.Consumer>
    )
}

export default PhotosList;