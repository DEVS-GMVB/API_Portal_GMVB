const {
    lista_negra
} = require('../models/');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const ListaNegraController = {
    inclusao: async (req, res) => {
        const {
            cpf_cliente,
            motivo,
            parceiro,
            data_inclusao,
            id_acesso,
            cpf_supervisor,
            cpf_gerente,
            cpf_parceiro,
            gerente,
            supervisor,
            id_parceiro
        } = req.body;

        const listaNegraExists = await lista_negra.findOne({
            where: {
                cpf: cpf_cliente
            }
        })

        if(listaNegraExists) {
            return res.json({message: "Cpf já existente na lista negra"})
        }

        const listaNegraInsert = await lista_negra.create({
            cpf: cpf_cliente,
            motivo,
            parceiro,
            data_inclusao,
            id_acesso,
            cpf_supervisor,
            cpf_gerente,
            cpf_parceiro,
            gerente,
            supervisor,
            id_parceiro
        })

        return res.status(201).json(listaNegraInsert);
    }
}

module.exports = ListaNegraController;