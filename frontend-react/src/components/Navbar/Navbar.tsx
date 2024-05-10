import React from 'react';
import { AppBar, Avatar, Backdrop, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import assets from '../../shared/constants/images';
import { pages } from '../../shared/types/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import navStyle from './NavbarStyle';
import { motion } from 'framer-motion';
import { Cancel } from '@mui/icons-material';


const Navbar = () => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ }}>
      <Container maxWidth="xl" sx={navStyle.container}>
        <Toolbar disableGutters sx={{}}>
          <Box component='img' alt='logo' src={assets.logo} sx={navStyle.imgDesktop} />
          <Typography
            variant="h6"
            sx={navStyle.logoDesktop}
          >
            Dev
          </Typography>

          <Box component='img' alt='logo' src={assets.logo} sx={navStyle.imgMobile} />
          <Typography
            variant="h5"
            sx={navStyle.logoMobile}
          >
            LOGO
          </Typography>

          <Box sx={navStyle.hamburger}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleOpen}
              sx={{  }}
            >
              <MenuIcon />
            </IconButton>
            {isOpen &&
              <>
                <Backdrop
                  open={isOpen}
                  sx={{ zIndex: 998, backdropFilter: 'blur(0.5px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} // Adjust the blur radius as needed
                />

                <motion.div
                  initial={{ opacity: 0, x: 100 }} // Initial state (not visible)
                  animate={{ opacity: 1, x: 0 }} // Animation to make it visible
                  transition={{ duration: 0.30, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 999,

                  }} // Ensure the motion div covers the entire screen
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 'calc(100% + 1px)', // Adjust the distance below IconButton as needed
                      left: 'calc(50% - 24%)', // Center horizontally
                      width: 'calc(100% - 20%)',
                      height: '100vh',
                      zIndex: 9999,
                      borderTopLeftRadius: '15px', // Border radius for the top left corner
                      borderBottomLeftRadius: '15px',
                      backgroundColor: 'white',
                      overflowY: 'auto',
                      boxShadow: '0 7px 18px 0 rgba(2,118,179,0.13)',
                      backgroundImage: `url(${assets.bgWhite})`, // Set the background image
                      backgroundSize: 'cover', // Adjust background image size as needed
                      backgroundRepeat: 'no-repeat',
                      // Enable scrolling if content exceeds box height
                    }}
                  >
                    {/* Cancel Icon */}
                    <IconButton
                      onClick={handleCloseNavMenu}
                      sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        zIndex: 99999,
                      }}
                    >
                      <Cancel
                        onClick={toggleOpen} />
                    </IconButton>

                    {pages.map((page) => (
                      <Box
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                          position: 'relative',
                          top: '20%',
                          // backdropFilter: 'blur(8px)',
                          padding: '10px',
                          width: '80%',
                          margin: '10px auto', // Center horizontally
                        }}
                      >
                        <Button sx={{
                          my: 1,
                          color: 'black',
                          transition: 'background-color 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: '#fff',
                            color: '#3c52b2',
                          },
                        }}>
                          {page}
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </>
            }

          </Box>

          <Box sx={navStyle.navDesktop}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={navStyle.navDesktopButtons}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={navStyle.iconButton}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ display: { xs: 'none', md: 'flex' } }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
