import { objectType, extendType } from 'nexus'	

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

export const employeeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.employee()
    t.crud.employees({ filtering: true, ordering: true })
  },
})

export const employeeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEmployee()
    t.crud.updateOneEmployee()
    t.crud.upsertOneEmployee()
    t.crud.deleteOneEmployee()

    t.crud.updateManyEmployee()
    t.crud.deleteManyEmployee()
  },
})