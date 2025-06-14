import React from "react";
import { Box, Typography } from "@mui/material";

export const Home: React.FC = () => {

  return (
      <Box
        sx={{
          display: "flex"
        }}
      >
        <Typography variant="h6">Hi User!</Typography>
      </Box>      
  );
};
