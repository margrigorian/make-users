import React from "react";
import s from "./User.module.css";

class User extends React.Component {
    render() {
        return (
            <div className={s.userContainer} onClick={() => this.props.fn(this.props.user)}>
                <img src="https://www.images.lesyadraw.ru/2013/06/House.jpg" alt="User" className={s.userPhoto} />
                <p className={s.userName}>{this.props.user.name}</p>
            </div>
        )
    }
}

export default User;