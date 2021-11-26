import React from "react";
import { Box, Button, Modal } from '@mui/material';
import './modal.css';

interface Prop {
    children?: JSX.Element;
    text: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '30rem',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function SimpleModal(prop: Prop) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        return setOpen(false);
    };

    return (
        <div className="modal-container">
            <Button variant="contained" color="primary" onClick={handleOpen}>
                {prop.text}
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Box className="box-modal" sx={style}>
                    {prop.children}
                </Box>
            </Modal>
        </div>
    );
}