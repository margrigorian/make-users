import React from "react";
import s from "./UserPage.module.css";

class UserPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={s.userContainer}>
                <div>
                    <img src="http://26.media.tumblr.com/tumblr_ltusgeaJ8H1qf9jcfo1_500.gif" alt="User" className={s.userPhoto}/>
                    <p className={s.userName}>{this.props.userInfo.name}</p>
                    <p><span className={s.colorText}>User Name: </span>{this.props.userInfo.username}</p>
                    <p><span className={s.colorText}>Email: </span>{this.props.userInfo.email}</p>
                    <p><span className={s.colorText}>Phone: </span>{this.props.userInfo.phone}</p>
                    <p><span className={s.colorText}>Address: </span>{this.props.userInfo.address.street}</p>
                </div>
                <div>
                    <button className={s.button}>POST</button>
                    <button className={s.button}>ALBUM</button>
                </div>
            </div>
        )
    }
}

export default UserPage;