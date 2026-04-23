const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

const productosRoutes = require('./routes/productos');
app.use('/api', productosRoutes);

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});