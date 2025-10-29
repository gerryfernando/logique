import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import TypographyCom from "../TypographyCom";
import { Link } from "react-router-dom";

const pages = ["Menu", "Cart"];

const styleMenu = {
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#fff",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
  "&:hover": {
    color: "inherit",
    textDecoration: "none",
  },
};
const Navbar = (props) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRoute = (page) => {
    let res = "/";
    if (page === "Cart") {
      res = "/cart";
    }
    return res;
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack gap={2} direction="row">
              {pages.map((page) => (
                <Link style={{ cursor: "pointer" }} to={handleRoute(page)}>
                  {page}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Mobile/Tablet view */}
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <TypographyCom
                    component="a"
                    href={handleRoute(page)}
                    textAlign="center"
                  >
                    {page}
                  </TypographyCom>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            color="#fff"
            bold
            fontSize="20px"
            noWrap
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
            Store
          </Typography>

          <Stack gap={2} direction="row" alignItems="center">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="User Profile" src="" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
