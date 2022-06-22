import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../assets/images/logo.png';
import op from '../../assets/images/op.png';


const pages = ['Create Campaign', 'How It Works'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xxxl" sx={{ bgcolor: "#EFF0F4" }}>
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', xl: 'flex' }, mr: 1 }}>
            <img src={logo} alt="logo" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', xl: 'flex' },
              fontFamily: 'Jura',
              fontStyle: "normal",
              fontSize: "1.75rem",
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              lineHeight: "2rem", color: "#232323"
            }}
          >
            GiveStation
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', xl: 'none' } }}>
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
              sx={{
                display: { xs: 'block', xl: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#232323", padding: ".2rem .5rem", margin: ".5rem",
                  background: "linear-gradient(180deg, rgba(0, 251, 255, 0.53) 0%, rgba(9, 201, 227, 0.53) 100%)", borderRadius: '100px'
                }}
              >
                <img src={op} alt="op" />
                <Typography
                  sx={{
                    fontFamily: "Jura", fontWeight: 700, fontSize: "1.25rem", mx: 1, whiteSpace: "nowrap", textTransform: "none"
                  }}
                >Optimism</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#232323", padding: ".2rem .5rem", margin: ".5rem", fontFamily: "Jura", fontWeight: 700, fontSize: "1.25rem", mx: 1, whiteSpace: "nowrap", textTransform: "none",
                  background: "linear-gradient(180deg, rgba(0, 251, 255, 0.53) 0%, rgba(9, 201, 227, 0.53) 100%)", borderRadius: '100px'
                }}
              >
                Connect Wallet
              </Button>
              {props.children}
            </Menu>
          </Box>
          <IconButton sx={{ display: { xs: 'flex', xl: 'none' }, mr: 0 }}>
            <img src={logo} alt="logo" width="60px" />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', xl: 'none' },
              flexGrow: 1,
              fontFamily: 'Jura',
              fontStyle: "normal",
              fontSize: "1.75rem",
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              lineHeight: "2rem", color: "#232323"
            }}
          >
            GiveStation
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', xl: 'flex' }, marginLeft: "5rem" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: "#232323", fontFamily: "Jura", fontWeight: 700, fontSize: "1.25rem", mx: 2, whiteSpace: "nowrap" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', xl: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                color: "#232323", padding: ".625rem 1.25rem",
                background: "linear-gradient(180deg, rgba(0, 251, 255, 0.53) 0%, rgba(9, 201, 227, 0.53) 100%)", borderRadius: '100px'
              }}
            >
              <img src={op} alt="op" />
              <Typography
                sx={{
                  fontFamily: "Jura", fontWeight: 700, fontSize: "1.25rem", mx: 1, whiteSpace: "nowrap", textTransform: "none"
                }}
              >Optimism</Typography>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                color: "#232323", padding: ".625rem 1.25rem", fontFamily: "Jura", fontWeight: 700, fontSize: "1.25rem", mx: 1, whiteSpace: "nowrap", textTransform: "none",
                background: "linear-gradient(180deg, rgba(0, 251, 255, 0.53) 0%, rgba(9, 201, 227, 0.53) 100%)", borderRadius: '100px'
              }}
            >
              Connect Wallet
            </Button>
            {props.children}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
