import { readUsers, writeUsers } from '../db.js' 

export const usersModel = {

  async listar() {
    return (await readUsers()).filter(u => !u.deletedAt)
  },

  async criar(data) {
    const users = await readUsers()

    
    const id = users.length
      ? Math.max(...users.map(u => u.id)) + 1
      : 1

    const novo = {
      id,
      ...data
    }

    users.push(novo)

    await writeUsers(users)

    return novo
  }

}
