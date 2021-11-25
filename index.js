const express = require('express')
const Sequelize = require('sequelize')
const sequelize = require('./config/database')
const { Aluno } = require('./models')
const db = require('./models')
const router = require('./router/rotas')
const app = express()
const Op = Sequelize.Op

app.use(router)

app.set('view engine',"ejs")

db.sequelize
.authenticate()
.then(() => {
    console.log('Sucesso na conexão!')
})
.catch((err => {
    console.error('Erro de conexão:')
}))

app.listen(3000)