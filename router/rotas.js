const express = require('express')
const controller = require('../controller/controller')
const app = express()

const router = express.Router()

router.get('/alunos',controller.Alunos)
router.get('/alunos/:id',controller.AlunosBuscaId)
router.get('/cadastro',controller.cadastro)
router.post('/alunos',controller.Store)


module.exports = router