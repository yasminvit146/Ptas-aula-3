
import { usersModel } from '../models/users.model.js'
export const userService = {
  async findAll() {
    return await usersModel.listar()
  },
  async createUser(data) {
    return await usersModel.criar(data)
  }
}
