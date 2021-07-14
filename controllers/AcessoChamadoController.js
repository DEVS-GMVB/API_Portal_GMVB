const {
    acesso_chamado
} = require('../models');

const path = require("path");
const mime = require('mime');
const fs = require("fs");

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

        Object.keys(objFields).forEach(item => (objFields[item] === undefined || objFields[item] === null || objFields[item] === "") ? objFields[item] = '' : objFields[item]);

        const resultObjInsert = await acesso_chamado.create({
            ...objFields
        });

        return res.json(resultObjInsert);

    },

    UploadFiles: async (req, res) => {
        const hashsArray = Object.keys(req.body.hash);

        let {
            rg_arq,
            cpf_arq,
            aneps_arq,
            pis_arq,
            titulo_arq,
            comprovante_endereco_arq
        } = req.files;

        (rg_arq) ? rg_arq = rg_arq[0].originalname: rg_arq = null;
        (cpf_arq) ? cpf_arq = cpf_arq[0].originalname: cpf_arq = null;
        (aneps_arq) ? aneps_arq = aneps_arq[0].originalname: aneps_arq = null;
        (pis_arq) ? pis_arq = pis_arq[0].originalname: pis_arq = null;
        (titulo_arq) ? titulo_arq = titulo_arq[0].originalname: titulo_arq = null;
        (comprovante_endereco_arq) ? comprovante_endereco_arq = comprovante_endereco_arq[0].originalname: comprovante_endereco_arq = null;

        for (let i in hashsArray) {
            let tempName = hashsArray[i].substring(34, hashsArray[i].length);

            if (rg_arq === tempName) {
                rg_arq = hashsArray[i];
            } else if (cpf_arq === tempName) {
                cpf_arq = hashsArray[i];
            } else if (aneps_arq === tempName) {
                aneps_arq = hashsArray[i];
            } else if (pis_arq === tempName) {
                pis_arq = hashsArray[i];
            } else if (titulo_arq === tempName) {
                titulo_arq = hashsArray[i];
            } else if (comprovante_endereco_arq === tempName) {
                comprovante_endereco_arq = hashsArray[i];
            } else {
                tempName = "";
            }
        }

        const dataResult = await acesso_chamado.findOne({
            where: {
                id: req.query.id
            }
        });

        if (dataResult) {
            dataResult.rg_arq = rg_arq;
            dataResult.cpf_arq = cpf_arq;
            dataResult.aneps_arq = aneps_arq;
            dataResult.pis_arq = pis_arq
            dataResult.titulo_arq = titulo_arq;
            dataResult.comprovante_endereco_arq = comprovante_endereco_arq;

            dataResult.save();

            return res.json(dataResult);
        }

        return res.json({
            message: "Usuario não encontrado"
        });

    },

    Alterar: async (req, res) => {
        let acessoChamado = await acesso_chamado.update({
            ...req.body
        }, {
            where: {
                id: req.query.id
            }
        });

        if (acessoChamado[0] === 1) {
            const objAfterUpdate = await acesso_chamado.findByPk(req.query.id);
            return res.json(objAfterUpdate);
        }

        return res.json({
            message: "Não houve alteração, pois os campos estão iguais no BD"
        })
    },

    DownloadArquivos: async (req, res) => {
        const hashFile = req.query.hash;
        //"tmp/uploads/" + hashFile;
        const file = path.join("tmp", "uploads", hashFile);

        const filename = path.basename(file);
        const mimetype = await mime.lookup(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);

        var filestream = await fs.createReadStream(file);
        filestream.pipe(res);

        return res.download(filestream);
    }
}

module.exports = AcessoChamadoController;