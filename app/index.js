const express = require('express');
const app = express();
const path = require('path');
const IndexRoutes =  require('./routes/index')

// Configuracion
app.set('port', 3000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Rutas 

app.use(IndexRoutes)

// Archivos estaticos 

app.use(express.static(path.join(__dirname, 'public')))

// Escuchando el servidor

app.listen(app.get('port'), () => {
    console.log("Servidor escuchando en el puerto", app.get('port')); 
})