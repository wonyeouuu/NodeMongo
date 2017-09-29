export default class UserController {
    index(req, res) {
        res.send('Hello user from controller!')
    }

    async create(req, res) {
        const result = await req._db.user.insert(req.body)
        console.log(Object.keys(result))
        res.send({ msg: "OK" })
    }
}
