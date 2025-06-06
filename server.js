//requerer as variaveis de ambiente
require('dotenv').config()

//requerer as funcionalidades do app.js (express)
const app = require('./src/app')

//inincializar o servidor
app.listen(process.env.PORT, () => {
  console.log('\n Servidor inicializando na Porta: ', process.env.PORT)
})

