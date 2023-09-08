import React from 'react';
import './styles/ProductDetail.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ProductDetail({ products }) {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <Link to="/" className="button-link">Home</Link>
      <Link to="/registro" className="button-link">Registrarse</Link>
      <Link to="/login" className="button-link">Iniciar Sesión</Link>
      <h1>Detalle del Producto</h1>
      <div className="product-detail">
        
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock} unidades</p>
        <p>Código: {product.code}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
