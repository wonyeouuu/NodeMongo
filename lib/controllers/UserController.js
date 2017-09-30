import { ObjectID } from 'mongoskin'

export default class UserController {
    async index(req, res) {
        try {
            const result = await req._db.user.findAsync({ _id: new ObjectID('59ce1b92c9890136139081d3') })
            res.send(result)
        } catch (e) {
            res.send({ msg: e.message })
        }
    }

    async create(req, res) {
        const result = await req._db.user.insert(req.body)
        console.log(Object.keys(result))
        res.send({ msg: "OK" })
    }
}
