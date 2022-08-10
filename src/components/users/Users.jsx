import React from "react";
import UsersList from "./usersList/UsersList";
import UserPage from "./userPage/UserPage";

class Users extends React.Component{
    constructor(props) {
        super(props);

        this.state = {info: ""};

        this.getUserId = this.getUserId.bind(this);
    }

    getUserId(info) {
        // console.log(info);
        this.setState({info: info});
    }

    render() {
        return (
            <div>
                {this.state.info === "" ? <UsersList fn={this.getUserId} /> : <UserPage userInfo={this.state.info} />}
            </div>
        )
    }
}

export default Users;