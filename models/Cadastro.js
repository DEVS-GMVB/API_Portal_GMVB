module.exports = (sequelize, DataTypes) => {

    const Cadastro = sequelize.define('cadastro', {
        id_parceiro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cnpj: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        parceiro: DataTypes.STRING,
        tipo_pgto: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        nome_completo: DataTypes.STRING,
        cpf: DataTypes.STRING,
        banco: DataTypes.STRING,
        numero_cartao: DataTypes.STRING,
        agencia: DataTypes.STRING,
        conta: DataTypes.STRING,
        comissao: DataTypes.STRING,
        secundario: DataTypes.STRING,
        pct_secundario: DataTypes.STRING,
        terceario: DataTypes.STRING,
        pct_terceario: DataTypes.STRING,
        quaternario: DataTypes.STRING,
        pct_quaternario: DataTypes.STRING,
        supervisor: DataTypes.STRING,
        gerente: DataTypes.STRING,
        responsavel: DataTypes.STRING,
        usuario: DataTypes.STRING,
        senha: DataTypes.STRING,
        obs1: DataTypes.STRING,
        data_cartao: DataTypes.STRING,
        proxy: DataTypes.STRING,
        conta_cartao: DataTypes.STRING,
        banco_cartao: DataTypes.STRING,
        agencia_cartao: DataTypes.STRING,
        conta_cartao1: DataTypes.STRING,
        valor_cartao: DataTypes.STRING,
        validade_cartao: DataTypes.STRING,
        status: DataTypes.STRING,
        data_inativacao: DataTypes.STRING,
        comissao_novo: DataTypes.STRING,
        comissao_port: DataTypes.STRING,
        comissao_inss: DataTypes.STRING,
        sec_sant: DataTypes.STRING,
        psec_sant: DataTypes.STRING,
        ter_sant: DataTypes.STRING,
        pter_sant: DataTypes.STRING,
        qua_sant: DataTypes.STRING,
        pqua_sant: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        tipo: DataTypes.STRING,
        data_alteracao: DataTypes.STRING,
        filial: DataTypes.STRING,
        matricula: DataTypes.STRING,
        codigo: DataTypes.STRING,
        pis: DataTypes.STRING,
        rg: DataTypes.STRING,
        data_admissao: DataTypes.STRING,
        cod_funcao: DataTypes.STRING,
        cargo: DataTypes.STRING,
        projeto: DataTypes.STRING,
        setor: DataTypes.STRING,
        situacao: DataTypes.STRING,
        data_afastamento: DataTypes.STRING,
        data_fim: DataTypes.STRING,
        experiencia1: DataTypes.STRING,
        experiencia2: DataTypes.STRING,
        data_cadastro: DataTypes.STRING,
        supervisor_sant: DataTypes.STRING,
        gerente_sant: DataTypes.STRING,
        comissao_con: DataTypes.STRING,
        comissao_con1: DataTypes.STRING,
        comissao_con2: DataTypes.STRING,
        comissao_con3: DataTypes.STRING,
        sec_con: DataTypes.STRING,
        secp_con: DataTypes.STRING,
        ter_con: DataTypes.STRING,
        terp_con: DataTypes.STRING,
        qua_con: DataTypes.STRING,
        quap_con: DataTypes.STRING,
        status2: DataTypes.STRING,
        cidade: DataTypes.STRING,
        naturalidade: DataTypes.STRING,
        contrato: DataTypes.STRING,
        entregue: DataTypes.STRING,
        retencao1: DataTypes.STRING,
        retencao2: DataTypes.STRING,
        sup_consorcio: DataTypes.STRING,
        ger_consorcio: DataTypes.STRING,
        imovel_2par: DataTypes.STRING,
        imovel_3par: DataTypes.STRING,
        imovel_4par: DataTypes.STRING,
        imovel_5par: DataTypes.STRING,
        imovel_6par: DataTypes.STRING,
        imovel_totalpar: DataTypes.STRING,
        imovel_2pro: DataTypes.STRING,
        imovel_3pro: DataTypes.STRING,
        imovel_4pro: DataTypes.STRING,
        imovel_5pro: DataTypes.STRING,
        imovel_totalpro: DataTypes.STRING,
        auto_1par: DataTypes.STRING,
        auto_2par: DataTypes.STRING,
        auto_3par: DataTypes.STRING,
        auto_totalpar: DataTypes.STRING,
        auto_1pro: DataTypes.STRING,
        auto_2pro: DataTypes.STRING,
        auto_totalpro: DataTypes.STRING,
        tipo_novo: DataTypes.STRING,
        cadastro_pro: DataTypes.STRING,
        contrato_entregue: DataTypes.STRING,
        registro: DataTypes.STRING,
        dossie: DataTypes.STRING,
        sus: DataTypes.STRING,
        carteira: DataTypes.STRING,
        serie_carteira: DataTypes.STRING,
        faltas_atraso: DataTypes.STRING,
        optou_convenio: DataTypes.STRING,
        arquivo1: DataTypes.STRING,
        arquivo2: DataTypes.STRING,
        arquivo3: DataTypes.STRING,
        arquivo4: DataTypes.STRING,
        arquivo5: DataTypes.STRING,
        arquivo6: DataTypes.STRING,
        arquivo7: DataTypes.STRING,
        arquivo8: DataTypes.STRING,
        arquivo9: DataTypes.STRING,
        arquivo10: DataTypes.STRING,
        pagamento_demissao: DataTypes.STRING,
        descricao_demissao: DataTypes.STRING,
        valor_demissao: DataTypes.STRING,
        fgts_demissao: DataTypes.STRING,
        telefone_contato: DataTypes.STRING,
        baixa_carteira: DataTypes.STRING,
        exame_medico: DataTypes.STRING,
        status_demissao: DataTypes.STRING,
        ferias_vencidas: DataTypes.STRING,
        ferias_vencer: DataTypes.STRING,
        qtd_vencida: DataTypes.STRING,
        qtd_vencer: DataTypes.STRING,
        inicio_ferias: DataTypes.STRING,
        fim_ferias: DataTypes.STRING,
        dias_totais: DataTypes.STRING,
        dias_tirado: DataTypes.STRING,
        dias_tirar: DataTypes.STRING,
        certificacao_aneps: DataTypes.STRING,
        valor_desconto: DataTypes.STRING,
        data_boleto: DataTypes.STRING,
        segunda_prova: DataTypes.STRING,
        email_contato: DataTypes.STRING,
        tipo_aneps: DataTypes.STRING,
        resultado_prova: DataTypes.STRING,
        senha_aneps: DataTypes.STRING,
        uf_carteira: DataTypes.STRING,
        tipo_func: DataTypes.STRING,
        cpf_convenio1: DataTypes.STRING,
        cpf_convenio2: DataTypes.STRING,
        carteirinha1: DataTypes.STRING,
        carteirinha2: DataTypes.STRING,
        plano1: DataTypes.STRING,
        plano2: DataTypes.STRING,
        valor_plano1: DataTypes.STRING,
        valor_plano2: DataTypes.STRING,
        tipo_plano1: DataTypes.STRING,
        tipo_plano2: DataTypes.STRING,
        valor_empresa1: DataTypes.STRING,
        valor_empresa2: DataTypes.STRING,
        valor_funcionario1: DataTypes.STRING,
        valor_funcionario2: DataTypes.STRING,
        copart1: DataTypes.STRING,
        copart2: DataTypes.STRING,
        status_plano1: DataTypes.STRING,
        status_plano2: DataTypes.STRING,
        data_plano1: DataTypes.STRING,
        data_plano2: DataTypes.STRING,
        status_academia: DataTypes.STRING,
        valor_academia: DataTypes.STRING,
        status_telefonia: DataTypes.STRING,
        valor_telefonia: DataTypes.STRING,
        tipo_reem: DataTypes.STRING,
        valor_reem: DataTypes.STRING,
        tipo_ajuda: DataTypes.STRING,
        valor_ajuda: DataTypes.STRING,
        pago_reem: DataTypes.STRING,
        pago_ajuda: DataTypes.STRING,
        primeiro_vr: DataTypes.STRING,
        primeiro_vt: DataTypes.STRING,
        cheio_vr: DataTypes.STRING,
        cheio_vt: DataTypes.STRING,
        pago_vr: DataTypes.STRING,
        pago_vt: DataTypes.STRING,
        cpf_convenio3: DataTypes.STRING,
        carteirinha3: DataTypes.STRING,
        plano3: DataTypes.STRING,
        tipo_plano3: DataTypes.STRING,
        valor_empresa3: DataTypes.STRING,
        valor_funcionario3: DataTypes.STRING,
        copart3: DataTypes.STRING,
        status_plano3: DataTypes.STRING,
        data_plano3: DataTypes.STRING,
        cpf_convenio4: DataTypes.STRING,
        carteirinha4: DataTypes.STRING,
        plano4: DataTypes.STRING,
        tipo_plano4: DataTypes.STRING,
        valor_empresa4: DataTypes.STRING,
        valor_funcionario4: DataTypes.STRING,
        copart4: DataTypes.STRING,
        status_plano4: DataTypes.STRING,
        data_plano4: DataTypes.STRING,
        valor_plano3: DataTypes.STRING,
        valor_plano4: DataTypes.STRING,
        classificacao: DataTypes.STRING,
        data_pagamento_vr: DataTypes.STRING,
        data_pagamento_vt: DataTypes.STRING,
        criacao: DataTypes.STRING,
        data_criacao: DataTypes.STRING,
        motivo_cancelamento: DataTypes.STRING,
        logradouro: DataTypes.STRING,
        numero_l: DataTypes.STRING,
        complemento: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cep: DataTypes.STRING,
        webcred: DataTypes.STRING,
        chavej: DataTypes.STRING,
        mascara: DataTypes.STRING,
        top: DataTypes.STRING,
        sigla: DataTypes.STRING,
        esteira_bb: DataTypes.STRING,
        esteira_gmvb: DataTypes.STRING,
        nome_mae: DataTypes.STRING,
        repre: DataTypes.STRING,
        cpf_repre: DataTypes.STRING,
        data_certificacao: DataTypes.STRING,
        consorcio: DataTypes.STRING,
        imobiliario: DataTypes.STRING,
        certificacao: DataTypes.STRING,
        data_rg: DataTypes.STRING,
        orgao_emissao: DataTypes.STRING,
        cadastro: DataTypes.STRING,
        cadastrobb: DataTypes.STRING,
        tipo_pagamento: DataTypes.STRING,
        agencia_bb: DataTypes.STRING,
        conta_bb: DataTypes.STRING,
        empresa_bb: DataTypes.STRING,
        favorecido: DataTypes.STRING,
        remessa: DataTypes.STRING,
        data_cadastrobb: DataTypes.STRING,
        banco_bb: DataTypes.STRING,
        regra_pagamento: DataTypes.STRING,
        tabela_comp: DataTypes.STRING,
        prefeitura_rio: DataTypes.STRING,
        prefrio_port: DataTypes.STRING,
        governo_minas: DataTypes.STRING,
        tipo_contrato: DataTypes.STRING,
        data_bloqueio: DataTypes.STRING,
        tab_multi: DataTypes.STRING,
        numero_contrato: DataTypes.STRING,
        comissao_novo_sup: DataTypes.STRING,
        comissao_novo_ger: DataTypes.STRING,
        comissao_novo_quat: DataTypes.STRING,
        comissao_inss_sup: DataTypes.STRING,
        comissao_inss_ger: DataTypes.STRING,
        comissao_inss_quat: DataTypes.STRING,
        prefeitura_rio_sup: DataTypes.STRING,
        prefeitura_rio_ger: DataTypes.STRING,
        prefeitura_rio_quat: DataTypes.STRING,
        governo_minas_sup: DataTypes.STRING,
        governo_minas_ger: DataTypes.STRING,
        governo_minas_quat: DataTypes.STRING,
        tabela_multi: DataTypes.STRING,
        tabela_sim: DataTypes.STRING,
        superintendente: DataTypes.STRING,
        tipo_documento: DataTypes.STRING,
        escolaridade: DataTypes.STRING,
        estado_civil: DataTypes.STRING,
        curso: DataTypes.STRING,
        numero_reservista: DataTypes.STRING,
        titulo_eleitor: DataTypes.STRING,
        ctps: DataTypes.STRING,
        nome_pai: DataTypes.STRING,
        zona_titulo: DataTypes.STRING,
        secao_titulo: DataTypes.STRING,
        serie_ctps: DataTypes.STRING,
        estado_ctps: DataTypes.STRING,
        data_ctps: DataTypes.STRING,
        uf_rg: DataTypes.STRING,
        cracha: DataTypes.STRING,
        filhos: DataTypes.STRING,
        rg_filhos14_arq: DataTypes.STRING,
        escolaridade_arq: DataTypes.STRING,
        pis_arq: DataTypes.STRING,
        cartao_arq: DataTypes.STRING,
        carteira_trabalho_arq: DataTypes.STRING,
        certidao_arq: DataTypes.STRING,
        criminais_arq: DataTypes.STRING,
        outros_arq: DataTypes.STRING,
        titulo_eleitor_arq: DataTypes.STRING,
        reservista_arq: DataTypes.STRING,
        comprovante_residencia_arq: DataTypes.STRING
    }, {
        tableName: 'cadastro',
        timestamps: false
    })
    return Cadastro;
};