import { objectType } from 'nexus'	

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.user_id()
    t.model.email()
    t.model.name()
    t.model.settings()
    t.model.createdAt()
    t.model.updatedAt()
  },
})