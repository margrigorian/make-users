import React from "react";
import s from "./User.module.css";
import ModeContext from "../../../context/mode/modeContext";

// class User extends React.Component {
//     render() {
//         return (
//             <ModeContext.Consumer>
//                 {
//                     (mode) => (
//                         <div className={`${s.userContainer} ${mode === "night" ? s.backColorDark : s.backColorLight}`} onClick={() => this.props.fn(this.props.user)}>
//                             <img src="https://www.images.lesyadraw.ru/2013/06/House.jpg" alt="User" className={`${s.userPhoto} ${mode === "night" ? s.borderColor : undefined}`} />
//                             <p className={`${s.userName} ${mode === "night" ? s.nameColor : undefined}`}>{this.props.user.name}</p>
//                         </div>
//                     )
//                 }
//             </ModeContext.Consumer>
//         )
//     }
// }

function User(props) {
    return (
        <ModeContext.Consumer>
                {
                    (mode) => (
                        <div className={`${s.userContainer} ${mode === "night" ? s.backColorDark : s.backColorLight}`} onClick={() => props.fn(props.user)}>
                            <img src="https://www.images.lesyadraw.ru/2013/06/House.jpg" alt="User" className={`${s.userPhoto} ${mode === "night" ? s.borderColor : undefined}`} />
                            <p className={`${s.userName} ${mode === "night" ? s.nameColor : undefined}`}>{props.user.name}</p>
                        </div>
                    )
                }
        </ModeContext.Consumer>
    )
}

export default User;