import { Height } from "@mui/icons-material";
import { width } from "@mui/system";

const navStyle = {
    imgDesktop: {
        display: { xs: 'none', md: 'flex' },
        mr: 1,
        border: 'solid 2px white'
    },
    logoDesktop: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'black',
        textDecoration: 'none',
        warp: 'noWrap',
        
    },
    hamburger: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        
        justifyContent: 'flex-end'
    },
    menu: {
        display: { xs: 'block', md: 'none' },
        
        height: '50vh',
        width: '50vw'
    },
    imgMobile: {
        display: { xs: 'flex', md: 'none' },
        mr: 1,

    },
    logoMobile: {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'black',
        textDecoration: 'none',
        wrap: 'noWrap',

    },
    navDesktop: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
    },
    navDesktopButtons: {
        my: 2,
        color: 'black',
        display: 'block',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        },
    },
    iconButton: {
        p: 0,

        color: 'black'
    },
    container: {
        background: 'white'
    }
}

export default navStyle;