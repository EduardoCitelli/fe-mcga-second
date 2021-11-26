import './deleteUser.css';
import { Button } from "@mui/material";

interface Props {
    idUser: string;
    deleteOnClickHandler: (id: string) => void;
    closeOnClickHandler: () => void;
    cb?: () => void;
}

export default function DeleteUser(props: Props) {
    return (
        <>
            <Button variant="contained" color="error" onClick={() => props.deleteOnClickHandler(props.idUser)}>Yes</Button>
            <Button variant="contained" color="primary" onClick={() => {
                console.log(props.cb);
                if (props.cb)
                    props.cb();
            }}>No</Button>
        </>
    )
}