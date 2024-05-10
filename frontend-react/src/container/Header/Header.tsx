import React from 'react';
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import assets from '../../shared/constants/images';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {

    return (
        <Stack direction='row' sx={{
            display: { xs: 'block', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            border: 'solid 2px black',
        }}>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <Box className="app__header-badge">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20px',
                        width: { xs: '250px' },
                        borderRadius: '15px',
                        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
                    }}>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Micael</h1>
                        </div>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20px',
                        width: { xs: '250px' },
                        borderRadius: '15px',
                        boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
                    }}>
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">Freelancer</p>
                    </Box>
                </Box>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
                style={{ position: 'relative', overflow: 'hidden' }} // Ensure the parent container establishes a stacking context
            >
                <Box component='img' src={assets.profile} alt="profile_bg" sx={{ border: 'solid 2px green', width:'100%'}} />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={assets.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                    style={{
                        position: 'absolute',
                        top: 40,
                        left: 0,
                        width: '100%',
                        zIndex: -1,
                        border:'solid 2px black' // Ensure the circle stays behind the profile image
                    }}
                />
            </motion.div>


            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
                style={{
                    
                    alignItems: 'center',
                    background:'none',
                    flexGrow: 1
                }}
            >
                {[assets.flutter, assets.redux, assets.sass].map((circle, index) => {
                    // Generate random size for the circle
                    const size = 50 + Math.random() * 100; // Adjust the range as needed

                    return (
                        <div
                            key={`circle-${index}`}
                            style={{
                        
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: `${size}px`, // Use the same random size for both width and height
                                height: `${size}px`, // Use the same random size for both width and height
                                borderRadius: '50%', // Ensures circular shape
                                background: 'var(--white-color)',
                                boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                                margin: '10px', // Adjust spacing between circles
                            }}
                        >
                            <Box
                                component='img'
                                src={circle}
                                alt="profile_bg"
                                sx={{ width: '60%', height: '60%', borderRadius: '50%' }}
                            />
                        </div>
                    );
                })}
            </motion.div>


        </Stack>
        // <AppBar position="static">
        //     <Toolbar>
        //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //             My Website
        //         </Typography>
        //         {/* Add additional header components or actions here */}
        //     </Toolbar>
        // </AppBar>
    )
}

export default Header
