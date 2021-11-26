import React from "react";
import { Box, Button, ButtonPropsColorOverrides, Modal, Typography } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import './modal.css';

interface Prop {
    children: JSX.Element;
    text: string;
    title: string;
    buttonColor: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>;
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
    borderRadius: '1rem',
};

export default function SimpleModal(prop: Prop) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const childreWithCallBack = React.cloneElement(prop.children, {
        cb: handleClose,
    });

    return (
        <div className="modal-container">
            <Button variant="contained" color={prop.buttonColor} onClick={handleOpen}>
                {prop.text}
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Box className="box-modal" sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {prop.title}
                    </Typography>
                    {childreWithCallBack}
                </Box>
            </Modal>
        </div>
    );
}