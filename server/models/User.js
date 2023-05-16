const { Model, DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection.js');

class User extends Model{
    checkPassword(pass){
        return bcrypt.compareSync(pass, this.password)
    }
}

User.init(
    {
        id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks:{
            beforeCreate: async (newUserData) => {
                newUserData.dataValues.password = await bcrypt.hash(newUserData.dataValues.password, 10);
                return newUserData.dataValues;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.dataValues.password = await bcrypt.hash(newUserData.dataValues.password, 10);
                return updatedUserData.dataValues;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user'
    }
)

module.exports = User