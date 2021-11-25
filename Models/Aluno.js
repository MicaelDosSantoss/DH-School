module.exports = (sequelize, DataTypes) => {

    const Aluno = sequelize.define('Aluno',{
     id:{
         type: DataTypes.INTEGER,
         allowNull:false,
         autoIncrement: true,
         primaryKey: true
     },
     nome: {
         type: DataTypes.STRING,
         allowNull: false
     },
     sobrenome: DataTypes.STRING,
     ano_matricula: DataTypes.INTEGER
    
    },{
        timestamps: false,
        tableName: "Alunos"
    });
    

    return Aluno
}

