import './addUser.css';

import { FormApi } from "final-form";
import { Form } from 'react-final-form'
import { User } from "../../../models/user";
import { Button } from '@mui/material';
import TextInput from '../../sharedComponents/textInput/textInput';

interface Props {
    addUser: (value: User) => void;
    updaterUser?: User;
    cb?: () => void;
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

        if (props.cb)
            props.cb();
    }

    return (
        <Form
            onSubmit={onSubmitUser}
            initialValues={props.updaterUser ? props.updaterUser : defaultUser}

            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form
                    className="user-form"
                    onSubmit={handleSubmit}>
                    <TextInput 
                        name="name" 
                        placeHolder="Name" 
                        type="text"
                        required={true} />
                    <TextInput 
                        name="surname" 
                        placeHolder="Surname" 
                        type="text"
                        required={true} />
                    <TextInput 
                        name="phone" 
                        placeHolder="Phone" 
                        type="tel"
                        required={false} />
                    <TextInput 
                        name="email" 
                        placeHolder="Email" 
                        type="email"
                        required={true} />
                    <TextInput 
                        name="username" 
                        placeHolder="Username" 
                        type="text"
                        required={true} />
                    <div>
                        <Button
                            disabled={submitting || pristine}
                            type="submit"
                        >Submit</Button>
                        <Button
                            disabled={submitting || pristine}
                            onClick={() => form.reset()}
                            type="button"
                        >Reset</Button>
                    </div>
                </form>
            )}
        />
    );
}

export default UserForm;