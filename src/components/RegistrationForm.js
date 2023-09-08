import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        postalCode: '',
        city: '',
        province: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones.
        console.log(formData);
    };

    return (
        <div>
            <Link to="/" className="button-link">Home</Link>
            <Link to="/login" className="button-link">Iniciar Sesión</Link>
            <div className="registration-container">
                <h2 className="registration-title">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre y Apellidos:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Teléfono:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Dirección (calle):</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Código Postal:</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Ciudad:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="province">Provincia:</label>
                        <input
                            type="text"
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="registration-button">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
