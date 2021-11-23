const Alunos  = require('../Models')

const controller = {
    Select: async (req,res) => {
        let aluno = await Alunos.findAll()

      return res.json(aluno)
    },
    oi: (req,res) => {
        res.render('oi')
    }
    
}

module.exports = controller