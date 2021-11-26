import { Button } from "@mui/material";
import { User } from "../../../models/user";
import SimpleModal from "../../sharedComponents/modal/modal";
import UserForm from "../addUser/addUser";
import './listUsers.css';

interface Props {
    users: User[],
    deleteUser: (id: string) => void;
    updateUser: (user: User) => void;
}

function ListUsers(prop: Props) {
    function deleteOnClickHandler(id: string): () => Promise<void> {
        return async () => {
            if (window.confirm("Are you sure you want to delete this item? 🚧")) {
                prop.deleteUser(id);
            }
        };
    }

    return (
        <div className="grid">
            {
                prop.users.map((user: User) => (
                    <div key={user.id} className="card">
                        <h3>{user.name} - {user.surname}</h3>
                        <p>Username: {user.username}</p>
                        <p>Phone: {user.phone}</p>
                        <p>email: {user.email}</p>
                        <hr />

                        <div className="button-panel">
                            <SimpleModal children={<UserForm addUser={prop.updateUser} updaterUser={user} />} text="Edit ✍" />
                            <Button variant="contained" color="error" onClick={deleteOnClickHandler(user.id as string)}>Delete 🗑</Button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ListUsers;