import { mutationType, stringArg, intArg, core, arg } from 'nexus'

const dateTimeArg = (opts: core.CommonArgConfig) =>
  arg({ ...opts, type: 'DateTime' })

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOneUser()
    t.crud.deleteOneUser()
  },
})
