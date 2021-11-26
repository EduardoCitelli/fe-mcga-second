import { User } from "../../../models/user";
import SimpleModal from "../../sharedComponents/modal/modal";
import UserForm from "../addUser/addUser";
import DeleteUser from "../deleteUser/deleteUser";
import './listUsers.css';

interface Props {
    users: User[],
    deleteUser: (id: string) => void;
    updateUser: (user: User) => void;
}

function ListUsers(prop: Props) {

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
                            <SimpleModal
                                buttonColor="primary"
                                text="Edit ✍"
                                title="Edit User"
                                children={
                                    <UserForm
                                        addUser={prop.updateUser}
                                        updaterUser={user} />
                                }
                            />
                            <SimpleModal
                                buttonColor="error"
                                text="Delete 🗑"
                                title="Are you sure you want to delete this item? 🚧"
                                children={
                                    <DeleteUser
                                        deleteOnClickHandler={prop.deleteUser}
                                        idUser={user.id as string} />
                                }
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListUsers;