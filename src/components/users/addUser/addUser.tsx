import './addUser.css';

import { FormApi } from "final-form";
import { Form, Field } from 'react-final-form'
import { User } from "../../../models/user";
import { Button, TextField } from '@mui/material';
import TextInput from '../../sharedComponents/textInput/textInput';

interface Props {
    addUser: (value: User) => void;
    updaterUser?: User;
}

const defaultUser: User = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    username: "",
}

const required = (value: any) => (value ? undefined : 'Required')
const mustBeNumber = (value: number) => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = (min: number) => (value: number) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators: any[]) => (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export function UserForm(props: Props) {
    const onSubmitUser = (values: User, form: FormApi<User, User>) => {
        console.log(values);
        props.addUser(values);
        form.reset();
    }

    return (
        <Form
            onSubmit={onSubmitUser}
            initialValues={props.updaterUser ? props.updaterUser : defaultUser}

            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form
                    className="user-form"
                    onSubmit={handleSubmit}>
                    <TextInput name="name" placeHolder="Name" type="text" />
                    <TextInput name="surname" placeHolder="Surname" type="text"/>
                    <TextInput name="phone" placeHolder="Phone" type="tel" />
                    <TextInput name="email" placeHolder="Email" type="email" />
                    <TextInput name="username" placeHolder="Username" type="text" />
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