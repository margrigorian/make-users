import React from "react";
import UsersList from "./userInfo/usersList/UsersList";
import UserPage from "./userPage/UserPage";

class Users extends React.Component{
    constructor(props) {
        super(props);

        this.state = {info: ""};

        this.getUserId = this.getUserId.bind(this);
        this.comeBack = this.comeBack.bind(this);
    }

    getUserId(info) {
        this.setState({info});
    }

    comeBack() {
        this.setState({info: ""});
    }

    render() {
        return (
            <div>
                {this.state.info === "" ? <UsersList fn={this.getUserId} /> : <UserPage userInfo={this.state.info} fnComeBack={this.comeBack} />}
            </div>
        )
    }
}

export default Users;