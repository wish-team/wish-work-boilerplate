import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Root } from './style';
import { GifBox } from '@mui/icons-material';

// const style = {
//     position: 'absolute' as const,
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

const ModalController = ({ open, title, description, setOpen }) => {
    const [openModal, setOpenModal] = React.useState(open);
    const handleClose = () => {
        setOpen(false)
        setOpenModal(false);
    }

    useEffect(() => {
        setOpen(open)
        setOpenModal(open)
    }, [open])

    return (
        // <Root>
        <Modal open={openModal} onClose={handleClose}>
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {description}
                </Typography>
            </Box>
        </Modal>
        // </Root>
    )
}

export default ModalController