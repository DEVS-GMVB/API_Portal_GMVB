module.exports = (sequelize, DataTypes) => {
    const Proposta = sequelize.define('vw_proposta', {
        proposta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        codigo: DataTypes.INTEGER,
        mes: DataTypes.STRING,
        data_envio: DataTypes.STRING,
        parceiro: DataTypes.STRING,
        supervisor: DataTypes.STRING,
        nome: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        cpf: DataTypes.STRING,
        entregue: DataTypes.STRING,
        convenio: DataTypes.STRING,
        tipo: DataTypes.STRING,
        status: DataTypes.STRING,
        novo_proposta: DataTypes.STRING,
        numero_portabilidade: DataTypes.STRING,
        previsao_retorno: DataTypes.STRING,
        observacao: DataTypes.STRING,
        empresa: DataTypes.STRING,
        responsavel: DataTypes.STRING,
        data_atualizacao: DataTypes.STRING,
        valor_troco: DataTypes.STRING,
        dados_bancarios: DataTypes.STRING,
        duracao_responsavel: DataTypes.STRING,
        banco: DataTypes.STRING,
        dados_telefonicos: DataTypes.STRING,
        tipo_parceiro: DataTypes.STRING,
        parceiro_cadastro: DataTypes.STRING,
        sub_status: DataTypes.STRING,
        classificacao: DataTypes.STRING,
        correntista: DataTypes.STRING,
        gerente: DataTypes.STRING,
        vendedor: DataTypes.STRING,
        data_status: DataTypes.STRING,
        data_log2: DataTypes.STRING,
        tipo_fase: DataTypes.STRING,
        master: DataTypes.STRING,
        situacao: DataTypes.STRING,
        horario: DataTypes.STRING,
        gravacao: DataTypes.STRING,
        arquivo_rc: DataTypes.STRING,
        taxaespecial: DataTypes.STRING,
        arquivo_proposta: DataTypes.STRING,
        arquivo_pendente1: DataTypes.STRING,
        validade_contrato: DataTypes.STRING,
        data_log1: DataTypes.STRING,
        sla: DataTypes.STRING,
        diferenca: DataTypes.STRING,
        qtdfora: DataTypes.STRING,
        banco_origi: DataTypes.STRING,
        produto: DataTypes.STRING,
        usuario_master: DataTypes.STRING,
        sms: DataTypes.STRING,
        extrato_inss: DataTypes.INTEGER,
        dia: DataTypes.STRING,
        horario1: DataTypes.STRING,
        robo: DataTypes.STRING,
        qtd_robo: DataTypes.STRING,
        responsavel2: DataTypes.STRING,
        tipo_parceiro2: DataTypes.STRING,
        data_corte: DataTypes.STRING,
        empresa_sms: DataTypes.STRING,
        // id_parceiro:DataTypes.STRING,
        valor_parcela: DataTypes.STRING,
        seguro: DataTypes.STRING,
        data_atualizacao1: DataTypes.STRING,
        tfc: DataTypes.STRING,
        data_vinculo: DataTypes.STRING,
        parceiro_indica: DataTypes.STRING,
        supervisor_indica: DataTypes.STRING,
        gerente_indica: DataTypes.STRING,
        id_indica: DataTypes.STRING,
        exercito: DataTypes.STRING,
        parcela: DataTypes.STRING,
        etapa_sms: DataTypes.STRING,
        mes_atualizacao: DataTypes.STRING,
        tipo_banco: DataTypes.STRING,
        login_cetelem: DataTypes.STRING,
        id_sim: DataTypes.STRING,
        arquivo1: DataTypes.STRING
    }, {
        tableName: 'vw_proposta',
        timestamps: false
    })
    return Proposta;
};