import { User } from "../../../models/user";

interface Props {
    users: User[]
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


                    </div>
                ))
            }

        </div>
    )
}

export default ListUsers;