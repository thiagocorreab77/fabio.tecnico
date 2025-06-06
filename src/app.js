//requerer para o app,js a biblioteca express
const express = require('express');

//criar uma instancia do express (objeto app)
const app = express();
//requerer configuração de caminhos 
const path = require('path');

//configurar o ejs (o caminho para views)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views/'))

//configurar os arquivos estaticos
app.use(express.static(path.join(__dirname, '../public')))

//rota inicial
app.get('/', (req, res) => {
  res.render('home')

})

//rota de login
app.get('/login', (req, res) => {
  res.render('login')
})

//exportar o app para utilizar externo 
module.exports = app
