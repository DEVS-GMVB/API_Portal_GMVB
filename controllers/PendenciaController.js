const {
    vw_proposta,
    propostas
} = require('../models');
const {
    Op
} = require('sequelize');


const PendenciaController = {
    Filtro: async (req, res) => {
        console.log(req.body);


        const objFieldsHandle = {
            get: (target, name) => {
                return name in target ? target[name] : target[name]
            }
        }

        const objFileds = new Object({
            ...req.body
        });

        const objFieldsProxy = new Proxy(objFileds, objFieldsHandle);

        for (const [key, value] of Object.entries(objFieldsProxy)) {
            if (value === null || value === undefined || value === "") {
                delete objFieldsProxy[key];
            }
        }

        const where = new Object({
            ...objFieldsProxy
        });

        if (objFieldsProxy.status !== "" && objFieldsProxy.status) {
            const resultFilter = await vw_proposta.findAll({
                where
            });

            return res.json(resultFilter);
        }

        const resultFilter = await vw_proposta.findAll({
            where: {
                ...where,
                status: {
                    [Op.in]: ["PENDENTE", "ANEXAR EXTRATO DE CONSIGNACOES",
                        "MODALIDADE DIVERGENTE ENTRE CSG E CONTRATO", "CONVENIO DIVERGENTE DA CCB", "PENDENTE CSG", "INFORMAR TABELA DE SALDO",
                        "SALDO COLETAR ASSINATURA", "SALDO RECEBIDO - AGUARDANDO AUTORIZACAO", "SALDO - PENDENTE NS", "SALDO - PENDENTE NS SMS",
                        "SEM CONTATO COM O CLIENTE - SALDO BRADESCO", "SALDO A MAIOR MOBILE COLETAR ASSINATURA",
                        "SEM CONTATO COM O CLIENTE - ANEXAR GRAVACAO"
                    ]
                }
            }
        });

        return res.json(resultFilter);
    },

    Alterar: async (req, res) => {

        const {
            proposta,
            novo_proposta,
            obs_pendencia,
            tipo,
            saldo_port1,
            saldo_port2,
            saldo_port3,
            arquivo_pendente1,
            arquivo_pendente2,
            arquivo_pendente1n,
            arquivo_pendente2n,
            arq_cad1,
            arq_cad2,
            arq_cad3,
            arq_cad4,
            arq_cad1n,
            arq_cad2n,
            arq_cad3n,
            arq_cad4n,
            convenio,
            produto,
            telefone,
            agendamento,
            horario,
            banco,
            agencia,
            conta_cliente
        } = req.body

        try {

            const result = await propostas.findOne({
                where: {
                    proposta
                }
            });

            if (!result) {
                return res.send('Proposta vw inexistente')
            }

            result.novo_proposta = novo_proposta
            result.obs_pendencia = obs_pendencia
            //autoriza saldo 
            //tabela 
            result.tipo = tipo
            result.saldo_port1 = saldo_port1
            result.saldo_port2 = saldo_port2
            result.saldo_port3 = saldo_port3
            result.arquivo_pendente1 = arquivo_pendente1
            result.arquivo_pendente2 = arquivo_pendente2
            result.arquivo_pendente1n = arquivo_pendente1n
            result.arquivo_pendente2n = arquivo_pendente2n
            result.arq_cad1 = arq_cad1
            result.arq_cad2 = arq_cad2
            result.arq_cad3 = arq_cad3
            result.arq_cad4 = arq_cad4
            result.arq_cad1n = arq_cad1n
            result.arq_cad2n = arq_cad2n
            result.arq_cad3n = arq_cad3n
            result.arq_cad4n = arq_cad4n
            result.convenio = convenio
            result.produto = produto
            result.telefone = telefone
            result.agendamento = agendamento
            result.horario = horario
            result.banco = banco
            result.agencia = agencia
            result.conta_cliente = conta_cliente
            result.save();
            return res.json(result);

        } catch (error) {
            console.log(error)
        }
    },

    Modal: async (req, res) => {
        try {

            const {
                proposta
            } = req.body;

            const dadospropostas = await propostas.findOne({
                where: {
                    proposta
                }
            })
            return res.status(200).send(dadospropostas)

        } catch (error) {
            console.log(error)
            res.send(error);
        }
    },

    Modal4: async (req, res) => {
        const codigo = req.query.codigo;

        let {
            arquivo_pendente1,
            arquivo_pendente2,
            arquivo_pendente1n,
            arquivo_pendente2n
        } = req.body;

        arquivo_pendente1 ? arquivo_pendente1 = arquivo_pendente1.originalname[0] : arquivo_pendente1 = null;
        arquivo_pendente2 ? arquivo_pendente2 = arquivo_pendente2.originalname[0] : arquivo_pendente2 = null;
        arquivo_pendente1n ? arquivo_pendente1n = arquivo_pendente1n.originalname[0] : arquivo_pendente1n = null;
        arquivo_pendente2n ? arquivo_pendente2n = arquivo_pendente2n.originalname[0] : arquivo_pendente2n = null;

        const resultUpdate = await propostas.findOne({
            where: {
                proposta: codigo
            }
        });

        if(resultUpdate) {
            resultUpdate.arquivo_pendente1 = arquivo_pendente1;
            resultUpdate.arquivo_pendente2 = arquivo_pendente2;
            resultUpdate.arquivo_pendente1n = arquivo_pendente1n;

        }
    }

    
}

module.exports = PendenciaController;