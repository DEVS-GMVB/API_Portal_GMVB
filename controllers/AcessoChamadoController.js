const {
    acesso_chamado
} = require('../models');

const AcessoChamadoController = {
    Filtro: async (req, res) => {
        const objFields = new Object(req.body);

        Object.keys(objFields).forEach(item => (!objFields[item] || objFields[item] === undefined || objFields[item] === null || objFields[item] === "") ? delete objFields[item] : objFields[item]);

        const resultFilter = await acesso_chamado.findAll({
            where: objFields
        });

        if (resultFilter.length > 0)
            return res.json(resultFilter);

        return res.json({
            message: "filter is not exists"
        })
    },

    Incluir: async (req, res) => {
        const objFields = new Object(req.body);

        Object.keys(objFields).forEach(item => (objFields[item] === undefined || objFields[item] === null || objFields[item] === "") ?  objFields[item] = '' : objFields[item]);

        const resultObjInsert = await acesso_chamado.create({
            ...objFields
        });

        return res.json(resultObjInsert);

    },

    Alterar: async (req, res) => {
        let acessoChamado = await acesso_chamado.findByPk(req.query.id);

        if(acessoChamado) {
            acessoChamado = { ...acessoChamado, ...req.body };
        }

        acessoChamado.save();

        return res.json(acessoChamado);

    }
}

module.exports = AcessoChamadoController;