import React, { useState } from "react";
import './register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        activity: '',
        dateTime: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the form data, like sending it to a server
    }

    return (
        <div class="cover-container-register d-flex p-3 mx-auto flex-column">
            <form onSubmit={handleSubmit} class="form-register">
                <h1>Registrar actividad</h1>
                
                <div class="col-md-12 mb-4">
                    <div class="row">
                        <div class="col-md-12 mb-6">
                            <label class="form-label col-12">
                                Actividad:
                                <input type="text" name="activity" onChange={handleChange} className="form-control"/>
                            </label>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label class="form-label col-12">
                                Día y Hora:
                                <input type="datetime-local" name="dateTime" onChange={handleChange} className="form-control" />
                            </label>
                        </div>
                        <button type="submit" className="button-register">Enviar</button>
                    </div>
                </div> 
            </form>
        </div>
    );
}

export default Register;