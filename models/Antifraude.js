

module.exports = (sequelize, DataTypes) => {
    const Antifraude = sequelize.define('antifraude', {
        idsms_acesso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_acesso: DataTypes.STRING,
        proposta: DataTypes.STRING,
        data_envio: DataTypes.STRING,
        data_atualizacao: DataTypes.STRING,
        responsavel_atualizacao: DataTypes.STRING,
        face_match: DataTypes.STRING,
        biometria: DataTypes.STRING,
        ivness: DataTypes.STRING,
        qrcode: DataTypes.STRING,
        status_cliente: DataTypes.STRING,
        cpf_cliente: DataTypes.STRING,
        empresa: DataTypes.STRING,



    },{
        tableName: 'sms_acesso',
        timestamps: false
    })
    return Antifraude
};
