module.exports = (sequelize, DataTypes) => {
    const antifraudeMailing = sequelize.define('antifraudeMailing', {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        mes:DataTypes.STRING, 
        data_envio:DataTypes.STRING, 
        nome:DataTypes.STRING, 
         cpf:DataTypes.STRING, 
         entregue:DataTypes.STRING, 
         convenio:DataTypes.STRING, 
         telefone:DataTypes.STRING, 
         telefone_ddd_1:DataTypes.STRING, 
        proposta:DataTypes.STRING, 
         data_nascimento:DataTypes.STRING, 
        correntista:DataTypes.STRING, 
        banco_origi:DataTypes.STRING, 
        empresa:DataTypes.STRING, 
        cidade_ip:DataTypes.INTEGER, 
        estado_ip:DataTypes.INTEGER, 
        produto: DataTypes.STRING
   
    }, 
        {
        tableName: 'propostas',
        timestamps: false
    })
    return antifraudeMailing;
};//