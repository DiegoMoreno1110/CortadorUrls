import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";  
import axios from 'axios';

const Url = () => {

    let {idGenerado} = useParams();

    const [url, setUrl] = useState({});
    const [status, setStatus] = useState(false);

  
    const fetchUrl =  async () => {
        const result  = await axios(`http://localhost:8000/urls/${idGenerado}`);
        console.log("Result Data:",result.data)
        setUrl(result.data)
        setStatus(true);
    }

    const updatehUrl =  async () => {
        axios.post(`http://localhost:8000/urls/${idGenerado}`)
        .then((res) => {
            console.log("Contador update ");  
        })
        .catch((err) => {
            console.log(err);                
 
        });

        window.location.href = url.url
    }

    const redirectUrl = () => {
        updatehUrl();
        

    }

    useEffect(() => {
        fetchUrl();
    }, []);

    return ( 
        <Fragment>
            {status ? 
                redirectUrl()

                : 
                <>
                    <p>Url: {url.url}</p>
                    <p>IdGenerado: {url.idGenerado}</p>
                    <p>NuevoURL: {url.nuevoUrl}</p>
                    <p>Contador: {url.contador}</p>
                </>


            }

            
        </Fragment> 
    );
}

export default Url;
