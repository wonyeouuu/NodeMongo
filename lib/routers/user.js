import { Router } from 'express'
import db from '@/models'
import UserController from '@/controllers/UserController'

const router = Router()

router.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
})

router.use((req, res, next) => {
    req._db = db
    next()
})

const userController = new UserController()

router.get('/', userController.index)
router.post('/', userController.create)

export default router

