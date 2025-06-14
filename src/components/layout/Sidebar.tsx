import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {  Dashboard } from "@mui/icons-material";
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from "react-router-dom";
import type { MenuItem } from "../../utils/interfaces";

const drawerWidth = 200;

export const SideBarComponent: React.FC = () => {
 
 const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { text: "Dashboard", icon: <Dashboard />, path: "/" },
    { text: "Productos", icon: <CategoryOutlinedIcon />, path: "/productos" },
    { text: "Clientes", icon: <GroupIcon />, path: "/clientes" },
    { text: "Ventas", icon: <MonetizationOnOutlinedIcon />, path: "/ventas" },
    { text: "Logout", icon: <LogoutOutlinedIcon />, path: "/logout" },
  ];
 
 
 
 
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(200deg,rgba(245, 144, 66, 0.9),rgb(255, 140, 0));',
          color: 'white',
          marginTop: '54px',
          height: 'calc(100% - 54px)',
          paddingTop: '26px'

        }
      }}
    >
      <List>
      {menuItems.map(({ text, icon, path }) => (
        <ListItemButton key={text} onClick={() => navigate(path)}>
          <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
    </Drawer>
  );
};