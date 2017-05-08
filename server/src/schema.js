import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
type Channel {
   id: ID!
   name: String
}

type Query {
   channels: [Channel]
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels.
  addChannel(name: String!) : Channel
}
`
const schema = makeExecutableSchema({ typeDefs, resolvers })
export { schema }