module.exports = (sequelize, DataTypes) => {
    const Proposta_chavej = sequelize.define('proposta_chavej', {
        id_proposta: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        proposta: DataTypes.STRING, 
        status_pagamento: DataTypes.STRING, 
        receita_liquida: DataTypes.STRING, 
        valor_pagamento: DataTypes.STRING, 
        data_calculo: DataTypes.STRING, //datetime 
        pct: DataTypes.STRING, 
        tabela: DataTypes.STRING, 
        pct_parceiro: DataTypes.STRING, 
        data_pagamento: DataTypes.STRING, 
        status: DataTypes.STRING, 
        tipo: DataTypes.STRING, 
        valor: DataTypes.STRING, 
        codigo_convenio: DataTypes.STRING, 
        linha: DataTypes.STRING, 
        prazo: DataTypes.STRING, 
        cnpj: DataTypes.STRING, 
        parceiro: DataTypes.STRING, 
        chavej: DataTypes.STRING, 
        data_movimento: DataTypes.STRING, 
        indica: DataTypes.STRING, 
        data_liberacao: DataTypes.STRING, 
        movimentacao: DataTypes.STRING, 
        valor_desconto: DataTypes.STRING,
        status_calculo: DataTypes.STRING, 
        supervisor: DataTypes.STRING, 
        comissao1: DataTypes.STRING, 
        taxa: DataTypes.STRING, 
        ref: DataTypes.STRING, 
        valor_sup: DataTypes.STRING, 
        data_sup: DataTypes.STRING, 
        parceiro_indica: DataTypes.STRING, 
        gerente: DataTypes.STRING, 
        valor_ger: DataTypes.STRING, 
        data_ger: DataTypes.STRING, 
        quaternario: DataTypes.STRING, 
        valor_quat: DataTypes.STRING, 
        data_quat: DataTypes.STRING, 
        banco: DataTypes.STRING, 
        cpf_indica: DataTypes.STRING, 
        nome_indica: DataTypes.STRING, 
        conversor: DataTypes.STRING, 
        tabela_conversor: DataTypes.STRING, 
        cpf_cliente: DataTypes.STRING, 
        promotor_callcenter: DataTypes.STRING, 
        valor_promocall: DataTypes.STRING, 
        supervisor_callcenter: DataTypes.STRING, 
        valor_supcall: DataTypes.STRING, 
        gerente_callcenter: DataTypes.STRING, 
        valor_gercall: DataTypes.STRING,
        campanha_promotor: DataTypes.STRING, 
        campanha_supervisor: DataTypes.STRING, 
        campanha_gerente: DataTypes.STRING, 
        campanha_promocall: DataTypes.STRING, 
        campanha_supcall: DataTypes.STRING, 
        campanha_gercall: DataTypes.STRING, 
        tipo_produtor: DataTypes.STRING, 
        id_supervisor: DataTypes.STRING, 
        id_gerente: DataTypes.STRING, 
        competencia: DataTypes.STRING
    },{
        tableName: 'proposta_chavej',
        timestamps: false
    })
    return Proposta_chavej;
}
