//Esta linea lo que nos permite es importar el modulo de express
const express = require('express');
const cors = require('cors');
const axios = require('axios');


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

const BaseURL = 'https://api.sportmonks.com/v3/football/';


//Trae la data de todas las liga disponibles en la suscripcion//
app.get('/leagues', (req, res) => {
    axios.get(`${BaseURL}leagues${process.env.API_KEY}`)
    .then(response => {
        res.send(JSON.stringify(response.data))
    })
    .catch(error => {
        console.log(error);
    });
});

//Trae la data de liga por ID//
app.get('/leagues/:id', (req, res) => {
    axios.get(`${BaseURL}leagues/${req.params.id}${process.env.API_KEY}`)
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        console.log(error);
    });
});


app.listen(port, () => {
    console.log(`Estoy ejecutandome en http:/localhost:${port}`)
})




