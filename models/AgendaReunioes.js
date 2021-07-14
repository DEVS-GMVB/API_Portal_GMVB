module.exports = (sequelize, DataTypes) => {
    const Agenda_reunioes = sequelize.define('agenda_reunioes', {
      id:{
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey:true,
        
        },
        data_reuniao:DataTypes.STRING,
        hora_reuniao:DataTypes.STRING,
        hora_fim: DataTypes.STRING,
        sala:DataTypes.STRING,
        setor:DataTypes.STRING, 
        responsavel:DataTypes.STRING,
        tema:DataTypes.STRING,
        timestamp_inicio: DataTypes.INTEGER,
        timestamp_fim: DataTypes.INTEGER
      
      },{
          tableName: 'agenda_reunioes',
          timestamps:false
      })
    return Agenda_reunioes;
  };