const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        pokedex_entries: [Pokemon]
    }

    type Pokemon{
        id: ID!
        name: String!
        sprite: String!
        url: String!
        type: String!
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        pokemon: [Pokemon]
    }


    type Mutation {
        login(email:String!, password: String!): Auth
        addUser(username:String!, firstName:String!, lastName:String!, email:String!, password:String!) : Auth
        addPokemon(id: ID!, name: String!, sprite: String!, url: String!, type: String!) : Pokemon
        addEntry(pokemon_id: String!, note: String): Auth
    }
`

module.exports = typeDefs 