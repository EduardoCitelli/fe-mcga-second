import './deleteUser.css';
import { Button } from "@mui/material";
import { User } from '../../../models/user';

interface Props {
    user: User;
    deleteOnClickHandler: (id: string) => void;
    closeOnClickHandler: () => void;
}

export default function DeleteUser(props: Props) {
    return (
        <>
            <Button variant="contained" color="error" onClick={() => props.deleteOnClickHandler(props.user.id as string)}>Yes</Button>
            <Button variant="contained" color="primary" onClick={props.closeOnClickHandler}>No</Button>
        </>
    )
}