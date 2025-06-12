import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, TextField, InputAdornment } from "@mui/material";
import { Search, Settings, Notifications, AccountCircle } from "@mui/icons-material";

export const NavbarComponent: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "white",
        color: "black",
        background:
          "linear-gradient(195deg,rgb(251, 253, 255),rgb(245, 248, 252),rgb(228, 246, 252))",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">SISINVSALE</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              id="input-with-sx"
              label="Search here"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <IconButton>
            <Settings />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};