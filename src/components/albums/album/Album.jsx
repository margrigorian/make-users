import React from "react";
import ModeContext from "../../context/mode/modeContext";
import s from "./Album.module.css";

// class Album extends React.Component{
//     render() {
//         return (
//             <ModeContext.Consumer>
//                 {
//                     (mode) => (
//                                 <div>
//                                     <div className={`${s.album} ${mode === "night" ? s.imgForDarkMode : s.imgForLightMode}`} onClick={() => this.props.fn()}>
//                                         <p className={s.title} style={{marginTop: mode === "night" ? "35px" : undefined}}>{this.props.album.title}</p>
//                                     </div>
//                                 </div>
//                     )
//                 }
//             </ModeContext.Consumer>
//         )
//     }
// }

function Album(props) {
    return (
        <ModeContext.Consumer>
                {
                    (mode) => (
                                <div>
                                    <div className={`${s.album} ${mode === "night" ? s.imgForDarkMode : s.imgForLightMode}`} onClick={() => props.fn()}>
                                        <p className={s.title} style={{marginTop: mode === "night" ? "35px" : undefined}}>{props.album.title}</p>
                                    </div>
                                </div>
                    )
                }
        </ModeContext.Consumer>
    )
}

export default Album;