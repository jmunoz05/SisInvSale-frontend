import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Producto } from '../pages/Producto';
import { Cliente } from '../pages/Cliente';
import { Venta } from '../pages/Venta';
import { PrivateRoute } from './PrivateRoute';


const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route element={<PrivateRoute />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/productos" element={<Producto />} />
      <Route path="/clientes" element={<Cliente />} />
      <Route path="/ventas" element={<Venta />} />
    </Route>
  </Routes>
);

export default AppRouter;
