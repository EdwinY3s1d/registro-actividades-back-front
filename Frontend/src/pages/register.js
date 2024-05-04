import React, { useState } from "react";
import './register.css';

function Register() {
    const [formData, setFormData] = useState({
        email: 'edwin.pena@grupo15.edu',
        activity: '',
        created_at: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    
        // Send the form data to the server
        fetch('http://localhost:5500/api/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.alert('Success: Activity registered successfully');
        })
        .catch((error) => {
            console.error('Error:', error);
            window.alert('Error: Failed to register activity');
        });
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
                                <input type="datetime-local" name="created_at" onChange={handleChange} className="form-control" />
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