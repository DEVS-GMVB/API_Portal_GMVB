module.exports = (sequelize, DataTypes) => {
    const Saldo_fer = sequelize.define('saldo_fer', {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        convenio: DataTypes.STRING,
        cpf: DataTypes.STRING,
        matricula: DataTypes.STRING,
        saldo_devedor: DataTypes.STRING,
        prazo_restante: DataTypes.STRING,
        taxa_juros: DataTypes.STRING,
        parceiro: DataTypes.STRING,
        data_envio: DataTypes.STRING,
        responsavel: DataTypes.STRING,
        data_atualizacao: DataTypes.STRING,
        status: DataTypes.STRING,
        parcela: DataTypes.STRING,
        arquivo1: DataTypes.STRING,
        id_parceiro: DataTypes.STRING,
        id_acesso: DataTypes.STRING,
        cpf_parceiro: DataTypes.STRING,
        supervisor: DataTypes.STRING,
        cpf_supervisor: DataTypes.STRING,
        gerente: DataTypes.STRING,
        cpf_gerente: DataTypes.STRING,
        data_inclusao: DataTypes.STRING

    },
    {
        tableName: 'saldo_fer',
        timestamps: false
    })
    return Saldo_fer;
};