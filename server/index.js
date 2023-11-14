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

const APIKEY = '?api_token=tYj0DC28VewdiBO9HaZMtTAP09YUW9tKViKowYncKVxnVNbKDDoWqVVYLsPo';


//const ligas = [];
async function datos() {
    const res = await fetch(`https://api.sportmonks.com/v3/football/leagues${APIKEY}`)
    const data = await res.json()
    //ligas.push(data);
    app.get('/leagues', (req, res) => {
        res.send(JSON.stringify(data));
    })
}    
datos()

/*app.get('/leagues', (req, res) => {
    res.send(JSON.stringify(ligas));
})*/

app.listen(port, () => {
    console.log(`Estoy ejecutandome en http:/localhost:${port}`)
})