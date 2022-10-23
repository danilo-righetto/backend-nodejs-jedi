const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const routeFornecedores = require('../rotas/fornecedores')

app.use(bodyParser.json())

app.use('/api/fornecedores', routeFornecedores)

app.listen(config.get('api.porta'), () => console.log('A API está funcionando'))