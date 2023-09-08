import React from 'react';
import products from '../data/products';
import './styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>      
      <Link to="/registro" className="button-link">Registrarse</Link>
      <Link to="/login" className="button-link">Iniciar Sesión</Link>
      <h1>FUNKOS POP</h1>      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">            
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>            
            <Link to={`/product/${product.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
