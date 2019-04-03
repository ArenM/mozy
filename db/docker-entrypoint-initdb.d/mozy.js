db = new Mongo().getDB( 'mozy' )
db.createUser(
  {
    user: 'mozy',
    pwd: 'mozy',
    roles: [ { role : 'readWrite', db : 'mozy' } ]
  }
)
