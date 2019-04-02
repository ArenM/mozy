db = new Mongo().getDB('test')
db.getSiblingDB('mozy')
db.getSiblingDB('admin')
db.updateUser('root', {
  roles: [
    {role: 'admin', db: 'mozy'}
  ]
})
