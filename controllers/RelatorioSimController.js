const sequelize = require('sequelize');
const Op = sequelize.Op;
const {
    vw_sim
}=require('../models')

const RelatorioSim = {


    selectView: async (req, res) => {
        const {
            proposta
        } = req.body;

        const result = await vw_sim.findOne({
            where: {
                proposta: proposta,
                [Op.or]: [
                    {
                    mes: "06/2021"//setar o mes dinamico com uma funcao 
                    },
                    {
                    mes: "07/2021"
                    }
               ]
            }
        })

        if(!result){
          return res.status(200).json({msg:"proposta não identificada"})
        }else{
          return res.status(200).json(result)
        }
        
    }
   
}
module.exports = RelatorioSim;