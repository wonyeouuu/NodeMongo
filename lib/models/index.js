import { MongoClient } from 'mongoskin'
import baseModel from '@/models/baseModel'

const _db = MongoClient.connect('mongodb://localhost:27017/testdb', { native_parser: true })

// NOTE: db.user => db.collection('user')
_db.bind('user').bind({
    ...baseModel,
    // Custom model helper below:
    // here
})

export default _db

