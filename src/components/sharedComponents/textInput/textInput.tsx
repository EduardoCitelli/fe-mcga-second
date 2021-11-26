import { TextField } from '@mui/material';
import { Field } from 'react-final-form';
import { required } from '../../../utils/validations';
import './textInput.css'

interface Props {
    name: string;
    placeHolder: string;
    type: React.InputHTMLAttributes<unknown>['type'];
}

function TextInput(props: Props) {
    return (
        <Field
            name={props.name}
            validate={required}
        >
            {({ input, meta }) => (
                <div className="text-field">
                    <TextField {...input} type={props.type} placeholder={props.placeHolder} />
                    {meta.error && meta.touched && <span className="error-label">{meta.error}</span>}
                </div>
            )}
        </Field>
    );
}

export default TextInput;