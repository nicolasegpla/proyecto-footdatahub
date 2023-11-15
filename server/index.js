//Esta linea lo que nos permite es importar el modulo de express
const express = require('express');
const cors = require('cors');

//Esta linea de codigo lo que nos permite es contruir nuestra app con express
const app = express()
const port = 3040

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());


//Datos bases de la API
const APIKEY = '?api_token=tYj0DC28VewdiBO9HaZMtTAP09YUW9tKViKowYncKVxnVNbKDDoWqVVYLsPo';
const BaseURL = 'https://api.sportmonks.com/v3/football/';


//Con la funcion datosLigas vamos a consumir el endpoint de leagues.
async function datosLigas( ligas ) {
    const res = await fetch(`${BaseURL}${ ligas }${APIKEY}`)
    const data = await res.json()
    
    // Esta es la ruta creada para consumir el endpoint leagues desde nuestro cliente
    app.get('/leagues', (req, res) => {
        res.send(JSON.stringify(data));
    })
}    
datosLigas('leagues');



app.listen(port, () => {
    console.log(`Estoy ejecutandome en http:/localhost:${port}`)
})