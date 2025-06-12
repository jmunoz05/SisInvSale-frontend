import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Button, Typography } from "@mui/material";
import {
  Dashboard,
  TableChart,
  Receipt,
  Language,
  Notifications,
  Person,
  Login,
  HowToReg,
} from "@mui/icons-material";

const drawerWidth = 240;

export const SideBarComponent: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background: 'linear-gradient(195deg, #42424a, #191919);', color: 'white' }
      }}
    >
      <Box p={2}>
        <Typography variant="h6" color="white">Material Dashboard 2</Typography>
      </Box>
      <List>
        {[
          { text: "Dashboard", icon: <Dashboard /> },
          { text: "Tables", icon: <TableChart /> },
          { text: "Billing", icon: <Receipt /> },
          { text: "RTL", icon: <Language /> },
          { text: "Notifications", icon: <Notifications /> },
          { text: "Profile", icon: <Person /> },
          { text: "Sign In", icon: <Login /> },
          { text: "Sign Up", icon: <HowToReg /> },
        ].map(({ text, icon }) => (
          <ListItem key={text}>
            <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Box p={2}>
        <Button variant="contained" fullWidth color="primary">Upgrade to Pro</Button>
      </Box>
    </Drawer>
  );
};