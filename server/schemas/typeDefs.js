const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Query {
        me: User
        users: [User]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email:String!, password: String!): Auth
        addUser(username:String!, firstName:String!, lastName:String!, email:String!, password:String!) : Auth
    }
`

module.exports = typeDefs 