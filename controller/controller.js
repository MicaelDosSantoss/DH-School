const express = require('express')
const Sequelize = require('sequelize')
const { Aluno } = require('../models')
const db = require('../models')
const app = express()
const Op = Sequelize.Op


const controller = {
   Alunos: async (req,res) => {
        const alunos = await Aluno.findAll()
        res.json(alunos)
 
},
AlunosBuscaId: async (req,res) => {
    const {id} = req.params;
    const aluno = await Aluno.findByPk(id)
    // const aluno = await Aluno.FindOne({where: { }})
    res.json(aluno)
},

    Store: async (req,res) => {
        const { nome,sobrenome,ano_matricula} = req.body

  const resultado = await Aluno.create({
            nome : 'Micael',
            sobrenome: "Garcia",
            ano_matricula
        })
        
    console.log(resultado)
    res.redirect('/alunos')

    },
    cadastro: (req,res) => {
        res.render('cadastroUsers')
    },
    Update: async (req,res) => {
        const { nome,sobrenome,ano_matricula} = req.body

        await Aluno.update({
            nome,
            sobrenome,
            ano_matricula,

        },{
            where:{
                id:id
            } 
        })
        
    }
 

}

module.exports= controller