const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection.js');

class Entry extends Model{}

Entry.init(
    {
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
                model: 'user',
                key: 'id'
            },
            unique:false
		},
		pokemon_id: {
			type: DataTypes.INTEGER,
			references: {
                model: 'pokemon',
                key: 'id'
            },
            unique:false
		},
		note: {
			type: DataTypes.STRING,
			allowNull: true
		}
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'entry'
    }
)

module.exports = Entry