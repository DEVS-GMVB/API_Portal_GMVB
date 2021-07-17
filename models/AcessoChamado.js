module.exports = (sequelize , DataTypes) => {
    const AcessoChamado = sequelize.define('acesso_chamado', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true  
        },

        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        rg: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        nome_mae: DataTypes.STRING,
        certificacao: DataTypes.STRING,
        telefone_celular: DataTypes.STRING,
        endereco: DataTypes.STRING,
        complemento: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        uf: DataTypes.STRING,
        cep: DataTypes.STRING,
        rg_arq: DataTypes.STRING,
        cpf_arq: DataTypes.STRING,
        aneps_arq: DataTypes.STRING,
        pis_arq: DataTypes.STRING,
        titulo_arq: DataTypes.STRING,
        comprovante_endereco_arq: DataTypes.STRING,
        bradesco: DataTypes.STRING,
        bradesco_senha: DataTypes.STRING,
        bradesco_login: DataTypes.STRING,
        parana: DataTypes.STRING,
        parana_login: DataTypes.STRING,
        parana_senha: DataTypes.STRING,
        crefisa: DataTypes.STRING,
        crefisa_login: DataTypes.STRING,
        crefisa_senha: DataTypes.STRING,
        pan: DataTypes.STRING,
        pan_login: DataTypes.STRING,
        pan_senha: DataTypes.STRING,
        f5bmg: DataTypes.STRING,
        f5bmg_login: DataTypes.STRING,
        f5bmg_senha: DataTypes.STRING,
        itau: DataTypes.STRING,
        itau_login: DataTypes.STRING,
        itau_senha: DataTypes.STRING,
        crm: DataTypes.STRING,
        crm_login: DataTypes.STRING,
        crm_senha: DataTypes.STRING,
        safra: DataTypes.STRING,
        safra_login: DataTypes.STRING,
        safra_senha: DataTypes.STRING,
        consorciobb: DataTypes.STRING,
        consorciobb_login: DataTypes.STRING,
        consorciobb_senha: DataTypes.STRING,
        bancobrasil: DataTypes.STRING,
        bancobrasil_login: DataTypes.STRING,
        bancobrasil_senha: DataTypes.STRING,
        sim: DataTypes.STRING,
        sim_login: DataTypes.STRING,
        sim_senha: DataTypes.STRING,
        imobiliario: DataTypes.STRING,
        imobiliario_login: DataTypes.STRING,
        imobiliario_senha: DataTypes.STRING,
        ole: DataTypes.STRING,
        ole_login: DataTypes.STRING,
        ole_senha: DataTypes.STRING,
        cetelem: DataTypes.STRING,
        cetelem_login: DataTypes.STRING,
        cetelem_senha: DataTypes.STRING,
        santander: DataTypes.STRING,
        santander_login: DataTypes.STRING,
        santander_senha: DataTypes.STRING,
        bbindicavendas: DataTypes.STRING,
        bbindicavendas_login: DataTypes.STRING,
        bbindicavendas_senha: DataTypes.STRING,
        daycoval: DataTypes.STRING,
        daycoval_login: DataTypes.STRING,
        daycoval_senha: DataTypes.STRING,
        consorciowimo: DataTypes.STRING,
        consorciowimo_login: DataTypes.STRING,
        consorciowimo_senha: DataTypes.STRING,
        esteiraportal: DataTypes.STRING,
        esteiraportal_login: DataTypes.STRING,
        esteiraportal_senha: DataTypes.STRING,
        supervisor: DataTypes.STRING,
        gerente: DataTypes.STRING,
        tipo: DataTypes.STRING,
        status: DataTypes.STRING,
        funcionario: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        data_inclusao: DataTypes.STRING,
        data_alteracao: DataTypes.STRING,
        responsavel: DataTypes.STRING
    }, {
        tableName: 'acesso_chamado',
        timestamps: false
    });

    return AcessoChamado;
}
