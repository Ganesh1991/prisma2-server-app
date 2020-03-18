import { objectType, extendType } from 'nexus'	

export const Settings = objectType({
  name: 'Settings',
  definition(t) {
    t.model.id()
    t.model.photoUrl()
    t.model.age()
    t.model.gender()
  },
})

export const settingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.settings()
    t.crud.settings({ filtering: true, ordering: true })
  },
})

export const settingsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneSettings()
    t.crud.updateOneSettings()
    t.crud.upsertOneSettings()
    t.crud.deleteOneSettings()

    t.crud.updateManySettings()
    t.crud.deleteManySettings()
  },
})