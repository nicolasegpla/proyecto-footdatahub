import React, { useEffect, useState } from "react";

// El customHook useGetData sera el encargado de traer todas las consultas de nuestro servidor //
function useGetData () {

    const baseURL = 'http://localhost:3040/';
    const [dataTopLigas, setDataTopLigas] = useState([]);// Almacena los datos de las ligas populares //

    // Este useEffect nos trae todas las ligas y almacena las ligas populares //
    useEffect(() => {
        fetch(`${baseURL}leagues`)
        .then(res => res.json())
        .then(response => {
            //En este array estaran almacenadas las ligas populares a renderizar//
            const topLigas = [response.data[0]]
            setDataTopLigas( topLigas);
            })
        .catch((error) => console.log(`tenemos errores de carga ${error}`));
    }, []);

    return {
        dataTopLigas,
    };
}

export { useGetData }