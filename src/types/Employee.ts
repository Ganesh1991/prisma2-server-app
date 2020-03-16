import { objectType } from 'nexus'	

export const Employee = objectType({
  name: 'Employee',
  definition(t) {
    t.model.emd_id()
    t.model.email()
    t.model.name()
    t.model.settings()
    t.model.createdAt()
    t.model.updatedAt()
  },
})