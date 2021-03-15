const {
    saldo_fer
} = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SaldoFerController = {
    Incluir: async (req, res) => {
        const {
            convenio,
            cpf,
            matricula,
            saldo_devedor,
            prazo_restante,
            taxa_juros,
            parceiro,
            data_envio,
            responsavel,
            data_atualizacao,
            status,
            parcela,
            arquivo1,
            id_parceiro
        } = req.body;


        const IncluirSaldoFer = await saldo_fer.create({
            convenio,
            cpf,
            matricula,
            saldo_devedor,
            prazo_restante,
            taxa_juros,
            parceiro,
            data_envio,
            responsavel,
            data_atualizacao,
            status: "AGUARDANDO CONSULTA FER",
            parcela,
            arquivo1,
            id_parceiro
        });
        return res.status(200).json(IncluirSaldoFer);
    },




    Atualizar: async (req, res) => {
        const {
            codigo,
            data_envio,
            parceiro,
            cpf
        } = req.body

        try {

            const BuscaSaldofer = await saldo_fer.findOne({
                where: {
                    codigo
                }
            })

            if (!BuscaSaldofer) {
                return res.send("Saldo FER inexistente")
            }

            BuscaSaldofer.data_envio = data_envio,
            BuscaSaldofer.parceiro = parceiro,
            BuscaSaldofer.cpf = cpf
            BuscaSaldofer.status = "FER RESPONDIDO"

            BuscaSaldofer.save()
            return res.status(200).json(BuscaSaldofer)


        } catch (error) {
            console.log(error)
        }

    },

    Modal: async (req, res) => {
        const codigo = req.body

        const dadosFer = await saldo_fer.findOne({
            where: codigo
        })

        if (dadosFer) {
            return res.status(201).json(dadosFer)
        }
    },

    Filtro: async (req, res) => {
        const {
            userTipousuario,
            userPerfil,
            userCpf,
            usuario,
            status,
            data_atualizacao,
            data_envio,
            cpf
        } = req.body



        let where = {};
        if (usuario) where.usuario = {
            [Op.substring]: usuario
        };
        if (status) where.status = status;
        if (data_atualizacao) where.data_atualizacao = data_atualizacao;
        if (data_envio) where.data_envio = data_envio;
        if (cpf) where.cpf = cpf
        if (userTipousuario === 'PARCEIRO' && userPerfil === 'MATRIZ' || userTipousuario === 'PARCEIRO' && userPerfil === 'SUB ACESSO') where.cnpj = userCpf;

        try {
            const pesquisa = await saldo_fer.findAll({
                where
            })

            if (pesquisa)
                return res.status(200).json(pesquisa)
        } catch (error) {
            console.log(error)
        }
    },

    Anexo: async (req, res) => {
        const {
            codigo
        } = req.query;
        const {
            anexo_print_fer
        } = req.file;

        const arquivo1 = req.file.originalname;

        try {

            const saldoferPesquisa = await saldo_fer.findOne({
                where: {
                    codigo
                }
            })


            if (saldoferPesquisa) {
                saldoferPesquisa.arquivo1 = arquivo1;
                saldoferPesquisa.save()

                res.status(201).json(saldoferPesquisa)
            }
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = SaldoFerController;