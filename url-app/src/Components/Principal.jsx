import React, { Fragment, useState } from 'react';
import axios from 'axios';
import {nanoid} from 'nanoid';

const Principal = () => {

    const [addUrl, setaddUrl] = useState({
        id: '',
        url: '',
        idGenerado: '',
        nuevoUrl: '',
        contador: ''
    })

    const {url, idGenerado, nuevoUrl, contador} = addUrl;


    const handleChange = (e) => {
        setaddUrl({
            ...addUrl, 
            [e.target.name]:e.target.value
        });
    }

    var id = nanoid(5);

    const createUrl = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:8000/urls`, {
            id: id,
            url: url,
            idGenerado: id,
            nuevoUrl: `http://localhost:3000/${id}`,
            contador: 0
        }).then((res) => {
            console.log(res);
            console.log(res.data);            
        })  .catch((err) => {
            console.log(err);
        });
    }

    return ( 
        <Fragment>
            <h1>Cortador de Url</h1>
            <form onSubmit={createUrl}>
                <input 
                    type="text" 
                    name="url" 
                    placeholder="url"
                    onChange={handleChange}
                />

                <input
                    type="submit"
                    value="Generar"
                />
            </form>
        </Fragment> 
    );
}

export default Principal;
