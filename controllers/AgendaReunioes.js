const {
    agenda_reunioes
} = require('../models/');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const AgendaReunioes = {

    Incluir: async (req, res) => { 
        //fazer uma parecida com essa mas de select para responder pro front end a resposta se ja existe
        //se existe um ja que está com o timestamp entre inicio e o fim  ***
        const {
           data_reuniao,
           hora_reuniao,
           hora_fim,
           sala,
           setor,
           responsavel,
           tema,
           timestamp_inicio,
           timestamp_fim
           
        } = req.body;

        const Agendada = await agenda_reunioes.findOrCreate({
            where: { 
                data_reuniao : data_reuniao,
                hora_reuniao : hora_reuniao,
                hora_fim : hora_fim,
                sala : sala,
                timestamp_inicio : timestamp_inicio,
                timestamp_fim : timestamp_fim
            },
            data_reuniao,
            hora_reuniao,
            hora_fim,
            sala,
            setor,
            responsavel,
            tema,
            timestamp_inicio,
            timestamp_fim
        });

        return res.status(200).send(Agendada);
    },

    selectHorarios: async (req, res) => { 

        const {
            data_reuniao,
            sala
        } = req.body;

        const horarios = await agenda_reunioes.findAll({
            attributes: ['hora_reuniao','hora_fim','timestamp_inicio','timestamp_fim', 'data_reuniao', 'sala'],
                where: {
                    sala : sala,
                    data_reuniao: data_reuniao
                }
        })

        return res.status(200).json(horarios)
}



}
module.exports = AgendaReunioes;