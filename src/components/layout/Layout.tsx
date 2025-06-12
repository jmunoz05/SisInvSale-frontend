import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "./Navbar";
import { SideBarComponent } from "./Sidebar";

const drawerWidth = 25;

export const Layout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "linear-gradient(195deg, #87ceeb, #4682b4)",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <NavbarComponent />
      <SideBarComponent />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`,
          mt: 8,
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};