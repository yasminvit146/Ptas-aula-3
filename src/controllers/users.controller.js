import { userService } from '../services/user.service.js'

export async function listUsers(req, res, next) {
  try {
    const users = await userService.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

export async function createUser(req, res, next) {
  try {
    const novo = await userService.createUser(req.body)
    res.status(201).json(novo) 
  } catch (err) {
    next(err)
  }
}
