import { objectType } from 'nexus'	

export const Settings = objectType({
  name: 'Settings',
  definition(t) {
    t.model.id()
    t.model.photoUrl()
    t.model.age()
    t.model.gender()
  },
})