
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
        border: 'solid 2px black'
    },
    hamburger: {
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        border: 'solid 2px green',
        justifyContent: 'flex-end' 
    },
    menu: {
        display: { xs: 'block', md: 'none' },
        border: 'solid 2px black'
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
        border: 'solid 2px black'
    },
    navDesktop: {
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
    },
    navDesktopButtons: {
        my: 2, 
        color: 'black', 
        display: 'block',
        border:'solid 2px black',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            color: 'rgba(0, 0, 139, 0.8)',
        },
    },
    iconButton:{
        p: 0,
    
        color:'black'
    },
    container:{
        border:'solid 2px white',background:'white'
    }
}

export default navStyle;