module.exports = (sequelize, DataTypes) => {
    const Vw_propostas = sequelize.define('vw_sim', {
        proposta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        cpf:DataTypes.STRING, 
        supervisor:DataTypes.STRING, 
        gerente:DataTypes.STRING, 
        parceiro:DataTypes.STRING, 
        mes:DataTypes.STRING
    },
        {
        tableName: 'vw_sim',
        timestamps: false
    })
    return Vw_propostas;
};