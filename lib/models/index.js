import mongo from 'mongoskin'

const db = mongo.db('mongodb://localhost:27017/testdb', { native_parser: true })

// NOTE: db.user => db.collection('user')
db.bind('user')

export default db

