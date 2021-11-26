import { User } from "../../../models/user";

interface Props {
    users: User[],
    deleteUser: (id: string) => void;
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

                        <button onClick={deleteOnClickHandler(user.id as string)}>Delete 🗑</button>


                    </div>
                ))
            }

        </div>
    )
}

export default ListUsers;