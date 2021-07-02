const {
    propostas
} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const RoboSimController = {


    select: async (req, res) => {

        let ArrayPropostas = [];

        const arquivosSelecionados = await propostas.findAll({
            attributes: [
                'proposta', 'status', 'banco_origi'
            ],
            where: {
                banco_origi: "SIM",
                [Op.or]: [{
                        proposta: {
                            [Op.like]: '6%'
                        }
                    },
                    {
                        proposta: {
                            [Op.like]: '7%'
                        }
                    },
                    {
                        proposta: {
                            [Op.like]: '8%'
                        }
                    },
                ],
            }
        })
        
        let i = 0;
        while (i < arquivosSelecionados.length) {
            if (arquivosSelecionados[i].status != "INTEGRADO" &&
                arquivosSelecionados[i].status != "CANCELADO" &&
                arquivosSelecionados[i].status != "REPROVADO"
            ) {
                ArrayPropostas.push(arquivosSelecionados[i])
            }

           i++;
        }
        return res.status(200).json(ArrayPropostas)

    },

    update: async (req, res) => {

        const { //update propostas set status = "EM ANALISE" where proposta = "7672213"
            proposta,
            status,
            responsavel,
            data_atualizacao
        } = req.body;

        const assistenciaAlterar = await propostas.update({
            status,
            responsavel,
            data_atualizacao
        }, {
            where: {
                proposta
            },
            returning: true,
            plain: true
        })
        return res.status(200).json(assistenciaAlterar)
    },

    selecaoFiltro: async (req, res) => {

        const {
            proposta
        } = req.body;

        const assistenciaInserir = await propostas.findAll({
            attributes: ['proposta', 'status', 'responsavel', 'data_atualizacao'],
            where: {
                banco_origi: "SIM",
                [Op.or]: [{
                        proposta: proposta
                    }
                ]
            }
        })
        return res.status(200).json(assistenciaInserir)
    },
    //select para filtro


}
module.exports = RoboSimController;