import React, { useEffect, useState, useContext } from "react";
import request from "../../../lib/request";
import User from "../user/User";
import ModeContext from "../../../context/mode/modeContext";
import s from "./UsersList.module.css";
import Cards from "../../../cards/Cards";

function UsersList(props) {
    const mode = useContext(ModeContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            let libUsers = await request("GET", "https://jsonplaceholder.typicode.com/users");
            setUsers(libUsers);
        }

        getUsers();
    }, [])

    return (
        <div className={s.body} style={{backgroundColor: mode === "night" ? "#420c0c" : undefined}}>
            <div className={s.container}>
                {users.map(item => (
                    <Cards key={`UserId-${item.id}`}>
                        <User user={item} fn={props.fn} fnGetUserId={props.fnGetUserId} />
                    </Cards>
                ))}
            </div>
        </div>
    )
}

export default UsersList;