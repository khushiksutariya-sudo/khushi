import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import InputBase from '@mui/material/InputBase';
// import { styled, alpha } from '@mui/material/styles';
import logo from "../Images/logo.png"
import { Link } from '@mui/material';


const pages = [{name : "Home" , path : "/"},{name : "Events" , path : '/events'},{name : "Gallery" , path : '/gallery'},{name : "Tickets" , path : '/tickets'}];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  // const SearchIconWrapper = styled('div')(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('md')]: {
  //       width: '20ch',
  //     },
  //   },
  // }));

  return (
    <div>
      <AppBar position="static" className='bg-header'>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ px: 4 }}>
            <Typography
              variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <img src={logo} alt="Logo" className='logo' />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {pages.map((page,i) => (
                      <MenuItem key={i} onClick={handleCloseNavMenu} >
                        <Typography sx={{ textAlign: "center" , color:'white'}} >
                          <Link href={page.path} >
                            {page.name }
                          </Link>
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center', gap: '25px' }} >
                  {pages.map((page,i) => (
                    <Button
                      key={i}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block", textTransform: 'none', fontSize: '17px', }}
                      className='header-page-name'
                    >
                      <Link href={page.path} >
                        {page.name}
                      </Link>
                    </Button>
                  ))}
                </Box>
                
                <Box sx={{ flexGrow: 0 }}>
                  <div className="btn-signup">

                    <button className='btn-login-bg  text-white  rounded-lg px-5 py-2 mr-3'><Link to="/login">Log In</Link></button>
                    <button className='btn-signup-bg text-white	 rounded-lg px-5 py-2' style={{ backgroundColor: '#283D8C' }} ><Link to="/signup">Sign Up</Link></button>

                  </div>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: "center" }}>
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
    </div>
  )
}

export default Header
