import './deleteUser.css';
import { Button } from "@mui/material";

interface Props {
    idUser: string;
    deleteOnClickHandler: (id: string) => void;
    cb?: () => void;
}

export default function DeleteUser(props: Props) {
    function closeOnClickHandler() {
        if (props.cb)
            props.cb();
    }

    return (
        <div className="button-delete-panel">
            <Button className="button-delete" variant="contained" color="error" onClick={() => props.deleteOnClickHandler(props.idUser)}>Yes</Button>
            <Button className="button-delete" variant="contained" color="primary" onClick={closeOnClickHandler}>No</Button>
        </div>
    )
}