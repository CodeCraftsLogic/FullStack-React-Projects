import React from 'react';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import assets from '../../shared/constants/images';
import { pages } from '../../shared/types/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import navStyle from './NavbarStyle';

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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{border:'solid 2px black'}}>
      <Container maxWidth="xl" sx={navStyle.container}>
        <Toolbar disableGutters sx={{border:'solid 2px green'}}>
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
              onClick={handleOpenNavMenu}
              sx={{border:'solid 2px black'}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={navStyle.menu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{display:{xs:'none',md:'flex'}}}/>
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
