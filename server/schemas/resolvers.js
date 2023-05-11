const {AuthenticationError} = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const Pokemon = require('../models/Pokemon');

const resolvers = {
    Query:{
        me: async (parent, args, context) =>{
            if(context.user) {
                const userData = await User.findOne({
                    where: {
                        id: context.user.id
                    }
                })
                return userData
            }
            
            throw new AuthenticationError('User is not logged in')
        },
        users: async () => {
            const userData = await User.findAll()
            if(userData.length){
                return userData
            }
            throw new AuthenticationError('No Userdata Found')
        },
        pokemon: async () => {
            const pokemons = await Pokemon.findAll()

            return pokemons
        }
    },
    Mutation: {
        addUser : async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)

            return { token, user}
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({where:{email: email}})

            if(!user){
                throw new AuthenticationError('Incorrect Email or Password')
            }
            
            const checkPass = await user.checkPassword(password)
            
            if(!checkPass){
                throw new AuthenticationError('Incorrect Email or Password')
            }

            const token = signToken(user)

            return { token, user }
        },
        addPokemon: async (parent, args) =>{
            const pokemon = await Pokemon.create(args)

            return pokemon
        }
    }
}

module.exports = resolvers