import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "@/config/constants";
import CloseIcon from "@mui/icons-material/Close";
import AnimationIcon from "@mui/icons-material/Animation";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Navbar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ my: 2, display: "flex", alignItems: "center", gap: "5px" }}
          >
            <AnimationIcon />
            <Typography variant="h6">BYD</Typography>
          </Box>
          <CloseIcon />
        </Box>
      </Container>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.Label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box height={"10vh"} sx={{ display: "flex" }}>
      <AppBar
        sx={{ height: "10vh", backgroundColor: "#141414" }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              my: 2,
              alignItems: "center",
              gap: "5px",
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Image style={{marginLeft:"20px"}} width={55} height={50} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/BYD_Company%2C_Ltd._-_Logo.svg/1200px-BYD_Company%2C_Ltd._-_Logo.svg.png"} alt="logo" />
            {/* <Typography variant="h6" component="div">
              BYD
            </Typography> */}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button onClick={() => router.push(item.route)} key={item.route} sx={{ color: "#fff" }}>
                {item.Label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
