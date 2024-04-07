import React, { useState } from "react";
import './search.css';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        // Here you can handle the search term, like sending it to a server
    }

    return (
        <div class="cover-container-search d-flex p-3 mx-auto flex-column">
                    <form onSubmit={handleSubmit} class="form-register">
                        <h1>Consultar actividades</h1>
                        
                        <div class="col-md-12 mb-4">
                            <div class="row">
                                <div class="col-md-12 mb-6">
                                    <label class="form-label col-12">
                                        Buscar consulta
                                        <input class="form-control" type="search" placeholder="" aria-label="Search" value={searchTerm} onChange={handleChange} ></input>
                                    </label>
                                </div>
                                <button type="submit" className="button-register mt-3">Buscar</button>
                            </div>
                        </div> 
                    </form>
                </div>
    );
}

export default Search;