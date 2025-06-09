import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login as authLogin } from "../services/authservice";
import bgImage from "../assets/bg-cajero.jpg";
import "../login.css";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link
} from "@mui/material";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await authLogin({ email, password });
      login(res?.data?.usuario, res?.data?.token);
      navigate("/");
    } catch (err) {
      alert("Login inválido");
    }
  };

  return (

    
    <Box
       sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Card sx={{ width: 400, borderRadius: 3, boxShadow: 5 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter email"
            defaultValue="SALAdmin"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />

          <Typography variant="h6" sx={{ mb: 2 }}>
            Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            placeholder="Enter password"
            defaultValue="********"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#2196f3",
              color: "#fff",
              mb: 2,
              fontWeight: "bold",
            }}
          >
            SIGN IN
          </Button>

          <Typography align="center">
            Don’t have an account?{" "}
            <Link href="#" underline="hover" sx={{ fontWeight: "bold" }}>
              Sign up
            </Link>
          </Typography>
        </CardContent>
      </Card>


    </Box>
  );
};