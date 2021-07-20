const {
    vw_proposta,
    acesso_completo,
    propostas,
} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op




const PropostaController = {


    Interface: async (req, res) => {

        try {
            let objFields = {
                ...req.body
            };

            for (let [key, value] of Object.entries(objFields)) {
                if (value === "" || value === undefined || value === null) {
                    delete objFields[key];
                }
            }

            if (Object.keys(objFields).length !== 0) {
                const result = await propostas.findAll({
                    where: {
                        ...objFields,
                    }
                });

                console.log(result);

                result.length === 0 ? res.json({
                    message: "nenhum registro encontrado com este filtro"
                }) : res.json(result);

            } else {
                return res.json({
                    message: "nenhum registro encontrado com este filtro"
                });
            }

        } catch (error) {
            console.error(error);
        }
    },

    AtualizarProposta: async (req, res) => {
        const {
            codigo,
            parceiro,
            id_acesso,
            supervisor,
            gerente,
            tipo_parceiro,
            proposta,
            data_envio,
            banco,
            status,
            produto,
            tipo,
            entregue,
            valor_troco,
            convenio,
            banco_port1,
            numero_portabilidade,
            parcela,
            seguro,
            qtdp_pagaport1,
            nome,
            cpf,
            telefone_ddd_1,
            telefone1,
            correntista,
            telefone4,
            matricula,
            agendamento,
            dia,
            horario,
            exercito,
            senha_exercito,
            sexo,
            data_nascimento,
            email_cliente,
            uf,
            observacao,
            responsavel,
            data_atualizacao

        } = req.body;

        try {
            const existsProposta = await propostas.findOne({
                where: {
                    codigo
                }
            })

            if (!existsProposta) {
                return res.status(401).json({
                    message: "Proposta não encontrada"
                })
            }

            existsProposta.parceiro = parceiro;
            existsProposta.id_acesso = id_acesso;
            existsProposta.supervisor = supervisor;
            existsProposta.gerente = gerente;
            existsProposta.tipo_parceiro = tipo_parceiro;
            existsProposta.proposta = proposta;
            existsProposta.data_envio = data_envio;
            existsProposta.banco = banco;
            existsProposta.status = status;
            existsProposta.produto = produto;
            existsProposta.tipo = tipo;
            existsProposta.entregue = entregue;
            existsProposta.valor_troco = valor_troco;
            existsProposta.convenio = convenio;
            existsProposta.banco_port1 = banco_port1;
            existsProposta.numero_portabilidade = numero_portabilidade;
            existsProposta.parcela = parcela;
            existsProposta.seguro = seguro;
            existsProposta.qtdp_pagaport1 = qtdp_pagaport1;
            existsProposta.nome = nome;
            existsProposta.cpf = cpf;
            existsProposta.telefone_ddd_1 = telefone_ddd_1;
            existsProposta.telefone1 = telefone1;
            existsProposta.correntista = correntista;
            existsProposta.telefone4 = telefone4;
            existsProposta.matricula = matricula;
            existsProposta.agendamento = agendamento;
            existsProposta.dia = dia;
            existsProposta.horario = horario;
            existsProposta.exercito = exercito;
            existsProposta.senha_exercito = senha_exercito;
            existsProposta.sexo = sexo;
            existsProposta.data_nascimento = data_nascimento;
            existsProposta.email_cliente = email_cliente;
            existsProposta.uf = uf;
            existsProposta.observacao = observacao;
            existsProposta.responsavel = responsavel;
            existsProposta.data_atualizacao = data_atualizacao;

            existsProposta.save();
            return res.status(200).json(existsProposta);


        } catch (error) {
            console.log(error)
        }




    },

    FiltroPropostaIdentificacao: async (req, res) => {
        try {
            let objFields = {
                ...req.body
            };

            for (let [key, value] of Object.entries(objFields)) {
                if (value === "" || value === undefined || value === null) {
                    delete objFields[key];
                }
            }

            if (Object.keys(objFields).length !== 0) {
                const result = await propostas.findAll({
                    where: {
                        ...objFields,
                    }
                });

                console.log(result);

                result.length === 0 ? res.json({
                    message: "nenhum registro encontrado com este filtro"
                }) : res.json(result);

            } else {
                return res.json({
                    message: "nenhum registro encontrado com este filtro"
                });
            }

        } catch (error) {
            console.error(error);
        }


        switch (tipo_usuario) {

            case "SUPERVISOR":
                const idsDoSupervisor = await acesso_completo.findAll({

                    attributes: ['id_acesso'],
                    where: {

                        supervisor: nome
                    }
                })

                if (idsDoSupervisor) {

                    var idssup = [];
                    idsDoSupervisor.forEach(element => {
                        idssup.push(element.id_acesso)
                    });

                }

                where.id_acesso = idssup;

                const propstasSup = await vw_proposta.findAll({
                    where
                });

                res.status(200).send(propstasSup);
                break;

            case "GERENTE":

                const idsDoGerente = await acesso_completo.findAll({

                    attributes: ['id_acesso'],
                    where: {

                        gerente: nome
                    }
                })

                if (idsDoGerente) {

                    var idsger = [];
                    idsDoGerente.forEach(element => {
                        idsger.push(element.id_acesso)
                    });

                }

                where.id_acesso = idsger;

                const propstasGer = await vw_proposta.findAll({
                    where
                });

                res.status(200).send(propstasGer);
                break;

            case "SUPERINTENDENTE":

                const idsDoSuperintendente = await acesso_completo.findAll({

                    attributes: ['id_acesso'],
                    where: {

                        superintendente: nome
                    }
                })

                if (idsDoSuperintendente) {

                    var idssuper = [];
                    idsDoSuperintendente.forEach(element => {
                        idsuper.push(element.id_acesso)
                    });

                }

                where.id_acesso = idssuper;

                const propostasSuper = await vw_proposta.findAll({
                    where
                });

                res.status(200).send(propostasSuper);
                break;

            case "ADM":

                const propostasAdm = await vw_proposta.findAll({
                    where
                });

                res.status(200).send(propostasAdm);
                break;

            default:
                // res.send("tipo usuario não aceito")
        }
    },

    CreateProposta: async (req, res) => {
        // const{ originalname: name,si}
        console.log(req.body)

        const {
            parceiro,
            id_acesso,
            supervisor,
            gerente,
            tipo_parceiro,
            proposta,
            data_envio,
            banco,
            status,
            produto,
            tipo,
            entregue,
            valor_troco,
            convenio,
            banco_port1,
            numero_portabilidade,
            parcela,
            seguro,
            qtdp_pagaport1,
            nome,
            cpf,
            telefone_ddd_1,
            telefone1,
            correntista,
            telefone4,
            matricula,
            agendamento,
            dia,
            horario,
            exercito,
            senha_exercito,
            sexo,
            data_nascimento,
            email_cliente,
            uf,
            observacao,
            cpf_supervisor,
            cpf_gerente,
            cpf_parceiro,
            data_inclusao,
            banco_origi
        } = req.body;

        const creatdProposta = await propostas.create({
            parceiro,
            id_acesso,
            supervisor,
            gerente,
            tipo_parceiro,
            proposta,
            data_envio,
            banco,
            status,
            produto,
            tipo,
            entregue,
            valor_troco,
            convenio,
            banco_port1,
            numero_portabilidade,
            parcela,
            seguro,
            qtdp_pagaport1,
            nome,
            cpf,
            telefone_ddd_1,
            telefone1,
            correntista,
            telefone4,
            matricula,
            agendamento,
            dia,
            horario,
            exercito,
            senha_exercito,
            sexo,
            data_nascimento,
            email_cliente,
            uf,
            observacao,
            cpf_supervisor,
            cpf_gerente,
            cpf_parceiro,
            data_inclusao,
            banco_origi
        })
        if (creatdProposta)
            res.send(creatdProposta)
    },

    PropostaIdentificacaoCreate: async (req, res) => {
        const {
            proposta,
            data_envio,
            mes,
            status,
            entregue,
            banco_origi,
            produto,
            tipo,
            cpf,
            nome,
            parceiro,
            supervisor,
            gerente,
            id_acesso,
            cpf_parceiro,
            cpf_supervisor,
            cpf_gerente,
            data_inclusao
        } = req.body

        const propostaAlreadyExists = await propostas.findOne({
            where: {
                proposta
            }
        })

        if (!propostaAlreadyExists) {
            const createIdentificacaoProposta = await propostas.create({
                proposta,
                data_envio,
                mes,
                status,
                entregue,
                banco_origi,
                produto,
                tipo,
                cpf,
                nome,
                parceiro,
                supervisor,
                gerente,
                cpf_parceiro,
                cpf_supervisor,
                cpf_gerente,
                data_inclusao,
                id_acesso,
                portal:"1"
            })

            return res.status(201).json(createIdentificacaoProposta);
        }
        return res.send({
            resp: "Proposta já existente"
        })
    },

    PropostaIdentificacaoModal: async (req, res) => {
        const codigo = req.body

        const dataPropostaIdentificacao = await propostas.findOne({
            where: codigo
        })

        return res.status(201).json(dataPropostaIdentificacao)
    },

    PropostaArquivos: async (req, res) => {
        const listHash = Object.keys(req.body.hash);

        const {
            codigo
        } = req.query;
        var {
            proposta,
            identificacao,
            endereco,
            renda,
            extratoInss,
            outros1,
            outros2,
            outros3,
            outros4
        } = req.files;

        (proposta) ? proposta = req.files.proposta[0].originalname: proposta = null;
        (identificacao) ? identificacao = req.files.identificacao[0].originalname: identificacao = null;
        (endereco) ? endereco = req.files.endereco[0].originalname: endereco = null;
        (renda) ? renda = req.files.renda[0].originalname: endereco = null;
        (extratoInss) ? extratoInss = req.files.extratoInss[0].originalname: extratoInss = null;
        (outros1) ? outros1 = req.files.outros1[0].originalname: outros1 = null;
        (outros2) ? outros2 = req.files.outros2[0].originalname: outros2 = null;
        (outros3) ? outros3 = req.files.outros3[0].originalname: outros3 = null;
        (outros4) ? outros4 = req.files.outros4[0].originalname: outros = null;

        for (let i in listHash) {
            let tempHash = listHash[i].substring(34, listHash[i].lenght);

            if (tempHash === proposta) {
                proposta = listHash[i];
            } else if (tempHash === identificacao) {
                identificacao = listHash[i];
            } else if (tempHash === endereco) {
                endereco = listHash[i];
            } else if (tempHash === renda) {
                renda = listHash[i];
            } else if (tempHash === extratoInss) {
                extratoInss = listHash[i];
            } else if (tempHash === outros1) {
                outros1 = listHash[i];
            } else if (tempHash === outros2) {
                outros2 = listHash[i];
            } else if (tempHash === outros3) {
                outros3 = listHash[i];
            } else if (tempHash === outros4) {
                outros4 = listHash[i];
            } else {
                tempHash = '';
            }
        }

        try {
            const arquivo = await propostas.findOne({
                where: {
                    codigo
                }
            });

            arquivo.arquivo1 = proposta;
            arquivo.arquivo2 = identificacao;
            arquivo.arquivo3 = endereco;
            arquivo.arquivo4 = renda;
            arquivo.arquivo5 = extratoInss;
            arquivo.arquivo6 = outros1;
            arquivo.arquivo7 = outros2;
            arquivo.arquivo8 = outros3;
            arquivo.arquivo9 = outros4;

            arquivo.save();
            return res.send(arquivo);

        } catch (error) {
            console.log(error)
        }
    },

    UpdateIdentificacaoPropostaFiles: async (req, res) => {
        const {
            codigo,
        } = req.query;

        var {
            proposta,
            identificacao,
            endereco,
            renda,
            outros1,
            outros2,
            outros3,
            outros4,
            gravacao
        } = req.files;

        (proposta) ? proposta = req.files.proposta[0].originalname: proposta = null;
        (identificacao) ? identificacao = req.files.identificacao[0].originalname: identificacao = null;
        (endereco) ? endereco = req.files.endereco[0].originalname: endereco = null;
        (renda) ? renda = req.files.renda[0].originalname: renda = null;
        (outros1) ? outros1 = req.files.outros1[0].originalname: outros1 = null;
        (outros2) ? outros2 = req.files.outros2[0].originalname: outros2 = null;
        (outros3) ? outros3 = req.files.outros3[0].originalname: outros3 = null;
        (outros4) ? outros4 = req.files.outros4[0].originalname: outros4 = null;
        (gravacao) ? gravacao = req.files.gravacao[0].originalname: gravacao = null;

        try {

            const arquivo = await propostas.findOne({
                where: {
                    codigo: codigo
                }
            })


            arquivo.arquivo1 = proposta;
            arquivo.arquivo2 = identificacao;
            arquivo.arquivo3 = endereco;
            arquivo.arquivo4 = renda;

            arquivo.arquivo6 = outros1;
            arquivo.arquivo7 = outros2;
            arquivo.arquivo8 = outros3;
            arquivo.arquivo9 = outros4;
            arquivo.arquivo10 = gravacao;

            arquivo.save()
            res.send(arquivo)

        } catch (error) {
            console.log(error);
        }

    },

    UpdateIdentificacaoPropostaCampos: async (req, res) => {
        const {
            codigo,
            nome,
            telefone_ddd_1,
            telefone,
            correntista,
            telefone_confirmacao,
            sistema_tel,
            exercito,
            senha_exercito,
            sexo,
            email,
            data_nascimento,
            endereco_uf_comercial,
            cpf,
            observacao,
            responsavel,
            data_atualizacao
        } = req.body

        const proposta = await propostas.findOne({
            where: {
                codigo: codigo
            }
        })

        if (proposta) {
            proposta.nome = nome,
                proposta.telefone_ddd_1 = telefone_ddd_1,
                proposta.telefone = telefone,
                proposta.correntista = correntista,
                proposta.telefone_confirmacao = telefone_confirmacao,
                proposta.sistema_tel = sistema_tel,
                proposta.exercito = exercito,
                proposta.senha_exercito = senha_exercito,
                proposta.sexo = sexo,
                proposta.email = email,
                proposta.data_nascimento = data_nascimento,
                proposta.endereco_uf_comercial = endereco_uf_comercial,
                proposta.cpf = cpf,
                proposta.observacao = observacao,
                proposta.responsavel = responsavel,
                proposta.data_atualizacao = data_atualizacao

            proposta.save()
            res.status(201).json(proposta)
        }

        return res.send("Proposta não identificada");

    },

}
module.exports = PropostaController;