import React from "react";
import request from "../../../lib/request";
import User from "../user/User";
import ModeContext from "../../../context/mode/modeContext";
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
            <ModeContext.Consumer>
                {
                    (mode) => (
                        <div className={s.body} style={{backgroundColor: mode === "night" ? "#420c0c" : undefined}}>
                            <div className={s.container}>
                                {this.state.users.map(item => (
                                    <User key={`UserId-${item.id}`} user={item} fn={this.props.fn} />
                                ))}
                            </div>
                        </div>
                    )
                }
            </ModeContext.Consumer>
        )
    }
}

export default UsersList;