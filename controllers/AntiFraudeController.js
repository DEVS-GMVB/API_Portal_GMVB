const {
    antifraudeMailing,
    propostas,
    antifraude
} = require('../models/');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const AntiFraudeController = {


    Incluir: async (req, res) => {
        const {
            id_acesso,
            proposta,
            data_envio,
            data_atualizacao,
            responsavel_atualizacao, 
            face_match,
            biometria,
            iveness,
            qrcode,
            status_cliente, 
            cpf_cliente,
            empresa
        } = req.body;

        const InclusaoAntifraude = await antifraude.create({
            id_acesso,
            proposta,
            data_envio,
            data_atualizacao,
            responsavel_atualizacao, 
            face_match,
            biometria,
            iveness,
            qrcode,
            status_cliente, 
            cpf_cliente,
            empresa
        });
        return res.status(200).send(InclusaoAntifraude);
    },


    Alterar: async (req, res) => { //corrigir para dados da proposta brt
        const {
              id_acesso,//colocar por defaut a data de hoje
              status_cliente, 
              data_atualizacao
        } = req.body;

        const assistenciaAlterar = await antifraude.update({
              data_atualizacao,
              status_cliente, 
        }, {
            where: {
                id_acesso: id_acesso
            },
            returning: true,
            plain: true
        })
        return res.status(200).json(assistenciaAlterar)
    },

    selectMailings: async (req, res) => { 

            const {
                proposta
            } = req.body;

            const selecaoMailing = await propostas.findOne({
                attributes: ['proposta','nome', 'cpf', 'entregue', 'convenio', 'telefone', 'telefone_ddd_1','proposta', 'data_nascimento',
                'correntista', 'banco_origi', 'empresa', 'cidade_ip', 'estado_ip', 'produto'],
                    where: {
                        proposta : proposta
                    }
            })

            return res.status(200).json(selecaoMailing)
    },

    selectArquivos: async (req, res) => { 
     
        const {
            proposta
        } = req.body;

        const arquivosSelecionados = await antifraudeMailing.findOne({
      attributes:  [
                    'arquivo1', 'arquivo2', 'arquivo3', 'arquivo4',
                    'arquivo5', 'arquivo6', 'arquivo7', 'arquivo8',
                    'arquivo11', 'arquivo12', 'arquivo15', 'arquivo16',
                    'arquivo17', 'arquivo18', 'arq_cad1', 'arq_cad2',
                    'arq_cad3', 'arq_cad4', 'arquivo_pendente1', 'arquivo_pendente2',
                    'arquivo_saldo', 'arquivo13', 'arquivo14', 'arquivo9',
                    'arquivo10', 'arquivo20', 'arquivo21', 'arquivo22'
                    ],
            where: {
                proposta: proposta
            }
        })
        return res.status(200).json(arquivosSelecionados)
    },

    // fazer rota e usar model de proposta
    selectBrasilIndoc: async (req, res) => { 
     
        const {
            proposta
        } = req.body;


        const arquivosSelecionados = await propostas.findOne({
      attributes:  [
                    'arquivo2', 'banco_origi', 'data_envio',
                    'entregue', 'nome', 'cpf', 'uf',
                    'telefone_ddd_1', 'telefone'
                    ],
            where: {
                proposta: proposta
            }
        })
        return res.status(200).json(arquivosSelecionados)
    },


}
module.exports = AntiFraudeController;