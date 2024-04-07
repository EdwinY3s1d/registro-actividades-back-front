import React from "react";
import './home.css';
import logo from '../assets/logo_b.png';

function Home() {   
    return (
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <div class="card-content-home">
                <img src={logo} alt="Logo" className="logo" />;
                <h2 class="card-title-home">Bienvenidos al sistema de registros</h2>
                <p class="card-description">Si quiere realizar su registro por favor dal clic al siguiente botón</p>
                <a href="/login" className="button-home">Iniciar sesión</a>
            </div>
        </div>

    )
}

export default Home;