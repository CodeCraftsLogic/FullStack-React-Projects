import React from 'react';
import { AppBar,Toolbar,Typography,Container } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Container maxWidth="md">
                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        &copy; {new Date().getFullYear()} My Website. All rights reserved.
                    </Typography>
                    {/* Add additional footer components or actions here */}
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Footer
