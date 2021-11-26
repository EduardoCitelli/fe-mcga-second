import './addUser.css';

import { FormApi } from "final-form";
import { Form, Field } from 'react-final-form'
import { User } from "../../../models/user";


type FormInputs = {
    name: string;
    surname: string;
    phone?: string;
    email: string;
    username: string;
};

interface Props {
    addUser: (value: User) => void;
}

const defaultUser: User = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    username: "",
}

export function UserForm(props: Props) {
    const onSubmitUser = (values: User, form: FormApi<User, User>) => {
        props.addUser(values);
        form.reset();
    }

    return (
        <Form
            onSubmit={onSubmitUser}
            initialValues={defaultUser}

            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form
                    className="user-form"
                    onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label>Surname:</label>
                        <Field
                            name="surname"
                            component="input"
                            type="text"
                            placeholder="Surname"
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <Field
                            name="phone"
                            component="input"
                            type="text"
                            placeholder="Phone"
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label>Username:</label>
                        <Field
                            name="username"
                            component="input"
                            type="text"
                            placeholder="Username"
                        />
                    </div>

                    <div>
                        <button
                            disabled={submitting || pristine}
                            type="submit"
                        >Submit</button>
                        <button
                            disabled={submitting || pristine}
                            onClick={() => form.reset()}
                            type="button"
                        >Reset</button>
                    </div>
                </form>
            )}
        />
    );
}

export default UserForm;