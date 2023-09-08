import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Asegúrate de que estás importando Home.js correctamente
import ProductDetail from './components/ProductDetail'; // Asegúrate de que estás importando ProductDetail.js correctamente
import products from './data/products';
import RegistrationForm from './components/RegistrationForm'; // Importa el componente de la página de registro
import LoginForm from './components/LoginForm'; // Importa el componente LoginForm


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
        <Route path="/registro" element={<RegistrationForm />} /> {/* Nueva ruta para la página de registro */}
        <Route path="/login" element={<LoginForm />} /> {/* Nueva ruta para la página de inicio de sesión */}
      </Routes>
    </Router>
  );
}

export default App;
