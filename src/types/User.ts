import { objectType, extendType } from 'nexus'	

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.user_id()
    t.model.email()
    t.model.status()
    t.model.name()
    t.model.settings()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const userQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user()
    t.crud.users({ filtering: true, ordering: true })
  },
})

export const userMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOneUser()
    t.crud.deleteOneUser()

    t.crud.updateManyUser()
    t.crud.deleteManyUser()
  },
})