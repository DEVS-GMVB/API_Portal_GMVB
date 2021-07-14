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

        let now = new Date;
        let mes = ("0" + (now.getMonth())).slice(-2);
        let mesFormatado = parseInt(mes);//vem como mes anterior
        let mesAtual = mesFormatado+1;

        try{
        const result = await vw_sim.findOne({
            where: {
                proposta: proposta,
                [Op.or]: [
                    {
                    mes: `${mesFormatado}/2021`
                    },
                    {
                    mes: `${mesAtual}/2021`
                    }
               ]
            }
        })
    
        if(!result){
            return res.status(200).json({msg:"proposta não identificada"})
          }else{
            return res.status(200).json(result)
          }
    
    }catch(error){
            console.log(error)
        }

        
    }
   
}
module.exports = RelatorioSim;