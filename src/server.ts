import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'
import { createContext } from './context'

const opts = {
  port: process.env.PORT || 4000,
}

new GraphQLServer({
  schema,
  context: createContext,
}).start(opts, ({port}) => console.log(`Server ready at port: ${port} || 4000`))
