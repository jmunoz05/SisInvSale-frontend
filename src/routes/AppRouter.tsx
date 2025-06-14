import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Producto } from '../pages/modules/Producto/Producto';
import { Cliente } from '../pages/modules/Cliente/Cliente';
import { Venta } from '../pages/modules/Venta';
import { PrivateRoute } from './PrivateRoute';
import React from "react";
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';


export const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route element={<PrivateRoute />}>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="productos" element={<Producto />} />
        <Route path="clientes" element={<Cliente />} />
        <Route path="ventas" element={<Venta />} />
      </Route>
    </Route>
  </Routes>
);