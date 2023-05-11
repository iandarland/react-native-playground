const Entry = require('./Entry');
const Pokemon = require('./Pokemon');
const User = require('./User')

User.belongsToMany(Pokemon, {
    through: Entry,
    as: 'pokedex_entries',
    foreignKey: 'user_id',
  });
Pokemon.belongsToMany(User, {
    through: Entry,
    as: 'pokedex_entries',
    foreignKey: 'pokemon_id',
  });

module.exports = { User }