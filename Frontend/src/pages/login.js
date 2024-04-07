import React, { useState } from 'react';
import './login.css';
import logo from '../assets/logo uniminuto.png';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div>
            <div className="contenedor">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">

                <div className="card-login">
                    <div class="row g-0">
                        <div className="col-md-6 col-lg-6 d-none d-md-block col-first">
                            <img src={logo} alt="Logo" className="logo-login pb-3" />
                            <p className="text-login">¡Bienvenido de vuelta! Por favor, inicia sesión para acceder a tu cuenta y disfrutar de todas las características de nuestra aplicación. </p>
                        </div>

                        <div className="col-md-6 col-lg-6 align-items-center col-second">
                            <div className="card-content-login">
                                <h2>Iniciar sesión</h2>
                                <form onSubmit={handleSubmit}>
                                <div className="mb-1 mt-3" controlId="formBasicEmail" id='username'>
                                        <input type="text" value={username} onChange={handleUsernameChange} placeholder='Usuario' className="form-control" />
                                </div>    
                                    <br />
                                    <div className="mb-1" controlId="formBasicEmail" id='password'>
                                        <input type="password" value={password} onChange={handlePasswordChange} placeholder='Contraseña' className="form-control"/>
                                    </div>
                                    <br />
                                    <button type="submit" className="button-login">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            </div>
            </div>
        </div>
    );
}

export default Login;