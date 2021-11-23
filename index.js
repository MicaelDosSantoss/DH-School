const express = require('express')

const sequelize = require('./config/database')
const Aluno = require('./Models/Aluno')

const app = express()


app.use(express.json())

app.use(express.static('public'))
app.set('view engine',"ejs")

sequelize
.authenticate()
.then(() => {
    console.log('Sucesso na conexão!')
})
.catch((err => {
    console.error('Erro de conexão:')
}))

app.get('/',(req,res) => {
    res.send('Hello')
})
app.get('/alunos',async (req,res) => {
    const alunos = await Aluno.findAll()
    res.json(alunos)
})
app.get('/alunos/:id', async (req,res) => {
    const {id} = req.params;
    const aluno = await Aluno.findByPk(id)
    res.json(aluno)
}



)



app.listen(3000)