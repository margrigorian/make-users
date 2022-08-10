import React from "react";
import request from "../../lib/request";
import User from "./User";
import s from "./UsersList.module.css";

class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {users: []};
    }

    async componentDidMount() {
        let libUsers = await request("GET", "https://jsonplaceholder.typicode.com/users");
        this.setState({users: libUsers});
    }

    render() {
        return (
            <div className={s.container}>
                {this.state.users.map(item => (
                    <User key={`UserId-${item.id}`} user={item} fn={this.props.fn} />
                ))}
            </div>
        )
    }
}

export default UsersList;