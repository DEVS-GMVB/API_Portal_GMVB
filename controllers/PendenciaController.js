const {
    vw_proposta,
    propostas
} = require('../models');
const {
    Op
} = require('sequelize');


const PendenciaController = {
    Filtro: async (req, res) => {
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

            if(result.status === 'PENDENTE') {
                result.status = 'SALDO A MAIOR COLETAR ASSINATURA';
            } else if (result.status === 'ANEXAR EXTRATO DE CONSIGNACOES') {
                result.status = 'SALDO A MAIOR COLETAR ASSINATURA';
            } else if (result.status === 'MODALIDADE DIVERGENTE ENTRE CSG E CONTRATO') {
                result.status = 'CADASTRO RESOLVIDO';
            } else if (result.status === 'CONVENIO DIVERGENTE DA CCB') {
                result.status = 'CADASTRO RESOLVIDO';
            } else if (result.status === 'INFORMAR TABELA DE SALDO') {
                result.status = 'NOVO CONTATO INFORMADO';
            } else if (result.status === 'SALDO COLETAR ASSINATURA') {
                result.status = 'PROP ATUALIZADA - BRADESCO';
            } else if (result.status === 'SALDO RECEBIDO - AGUARDANDO AUTORIZACAO') {
                result.status = 'PROP ATUALIZADA - AUTORIZADO';
            } else if (result.status === 'SALDO - PENDENTE NS') {
                result.status = ' SALDO - PENDENCIA REGULARIZADA';
            } else if (result.status === 'SALDO - PENDENTE NS SMS') {
                result.status = 'SALDO - PENDENCIA REGULARIZADA SMS';
            } else if (result.status === 'SEM CONTATO COM O CLIENTE - SALDO BRADESCO') {
                result.status = 'PROP ATUALIZADA - NAO AUTORIZADO';
            } else if (result.status === 'SALDO A MAIOR MOBILE COLETAR ASSINATURA') {
                result.status = 'SALDO A MAIOR COLETAR ASSINATURA';
            } else if (result.status === 'SEM CONTATO COM O CLIENTE - ANEXAR GRAVACAO') {
                result.status = ' PROP ALTERADA - ATUALIZADA SALDO A MAIOR';
            } else {
                result.status = null;
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

        if (resultUpdate) {
            resultUpdate.arquivo_pendente1 = arquivo_pendente1;
            resultUpdate.arquivo_pendente2 = arquivo_pendente2;
            resultUpdate.arquivo_pendente1n = arquivo_pendente1n;

        }
    },

    UploadFiles: async (req, res) => {
        const codigo = req.query.codigo;

        const hash = req.body.hash;

        const listHash = Object.values(hash);

        let {
            arquivo_pendente1,
            arquivo_pendente1n,
            arquivo_pendente2,
            arquivo_pendente2n,
            arq_cad1,
            arq_cad2,
            arq_cad3,
            arq_cad4,
            arq_cad1n,
            arq_cad2n,
            arq_cad3n,
            arq_cad4n,
            saldo_port1,
            saldo_port2,
            saldo_port3
        } = req.files;

        (arquivo_pendente1) ? arquivo_pendente1 = req.files.arquivo_pendente1[0].originalname: null;
        (arquivo_pendente1n) ? arquivo_pendente1n = req.files.arquivo_pendente1n[0].originalname: null;
        (arquivo_pendente2) ? arquivo_pendente2 = req.files.arquivo_pendente2[0].originalname: null;
        (arquivo_pendente2n) ? arquivo_pendente2n = req.files.arquivo_pendente2n[0].originalname: null;
        (arq_cad1) ? arq_cad1 = req.files.arq_cad1[0].originalname: null;
        (arq_cad2) ? arq_cad2 = req.files.arq_cad2[0].originalname: null;
        (arq_cad3) ? arq_cad3 = req.files.arq_cad3[0].originalname: null;
        (arq_cad4) ? arq_cad4 = req.files.arq_cad4[0].originalname: null;
        (arq_cad1n) ? arq_cad1n = req.files.arq_cad1n[0].originalname: null;
        (arq_cad2n) ? arq_cad2n = req.files.arq_cad2n[0].originalname: null;
        (arq_cad3n) ? arq_cad3n = req.files.arq_cad3n[0].originalname: null;
        (arq_cad4n) ? arq_cad4n = req.files.arq_cad4n[0].originalname: null;
        (saldo_port1) ? saldo_port1 = req.files.saldo_port1[0].originalname: null;
        (saldo_port2) ? saldo_port2 = req.files.saldo_port2[0].originalname: null;
        (saldo_port3) ? saldo_port3 = req.files.saldo_port3[0].originalname: null;

        for (let i in listHash) {
            let tempHash = listHash[i].substring(34, listHash[i].lenght);

            console.log(arquivo_pendente1);

            if (tempHash === arquivo_pendente1) {
                arquivo_pendente1 = listHash[i];
            } else if (tempHash === arquivo_pendente1n) {
                arquivo_pendente1n = listHash[i];
            } else if (tempHash === arquivo_pendente2) {
                arquivo_pendente2 = listHash[i];
            } else if (tempHash === arquivo_pendente2n) {
                arquivo_pendente2n = listHash[i];
            } else if (tempHash === arq_cad1) {
                arq_cad1 = listHash[i];
            } else if (tempHash === arq_cad2) {
                arq_cad2 = listHash[i];
            } else if (tempHash === arq_cad3) {
                arq_cad3 = listHash[i];
            } else if (tempHash === arq_cad4) {
                arq_cad4 = listHash[i];
            } else if (tempHash === arq_cad1n) {
                arq_cad1n = listHash[i];
            } else if (tempHash === arq_cad2n) {
                arq_cad2n = listHash[i];
            } else if (tempHash === arq_cad3n) {
                arq_cad3n = listHash[i];
            } else if (tempHash === arq_cad4n) {
                arq_cad4n = listHash[i];
            } else if (tempHash === saldo_port1) {
                saldo_port1 = listHash[i];
            } else if (tempHash === saldo_port2) {
                saldo_port2 = listHash[i];
            } else if (tempHash === saldo_port3) {
                saldo_port3 = listHash[i];
            } else {
                tempHash = '';
            }
        }

        try {

            const resultData = await propostas.findOne({
                where: {
                    codigo
                }
            });

            if (resultData) {
                resultData.arquivo_pendente1 = arquivo_pendente1;
                resultData.arquivo_pendente1n = arquivo_pendente1n;
                resultData.arquivo_pendente2 = arquivo_pendente2;
                resultData.arquivo_pendente2n = arquivo_pendente2n;
                resultData.arq_cad1 = arq_cad1;
                resultData.arq_cad2 = arq_cad2;
                resultData.arq_cad3 = arq_cad3;
                resultData.arq_cad4 = arq_cad4;
                resultData.arq_cad1n = arq_cad1n;
                resultData.arq_cad2n = arq_cad2n;
                resultData.arq_cad3n = arq_cad3n;
                resultData.arq_cad4n = arq_cad4n;
                resultData.saldo_port1 = saldo_port1;
                resultData.saldo_port2 = saldo_port2;
                resultData.saldo_port3 = saldo_port3;

                resultData.save();
            }

            return res.json({
                resultData,
            });

        } catch (error) {
            console.error(error);
        }
    },

    ObterArquivo: async (req, res) => {
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

module.exports = PendenciaController;