const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js');

class Pokemon extends Model{}

Pokemon.init(
    {
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		sprite: {
			type: DataTypes.STRING,
			allowNull: false
		},
        url:{
            type: DataTypes.STRING,
            allowNull: false
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'pokemon'
    }
)

module.exports = Pokemon