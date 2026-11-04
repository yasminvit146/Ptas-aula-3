
import { getDb } from '../db.js' 
import { ObjectId } from 'mongodb'

const getCollection = () => getDb().collection('users')

export const usersModel = {
 
  async listar() {
    const col = getCollection()
    return await col.find({}).toArray()
  },

 
  async criar(data) {
    const col = getCollection()
    
  
    const result = await col.insertOne(data)
    
   
    return { _id: result.insertedId, ...data }
  },

 
  async atualizar(id, updatedData) {
    const col = getCollection()
    return await col.updateOne(
      { _id: new ObjectId(id) }, 
      { $set: updatedData }
    );
  },


  async remover(id) {
    const col = getCollection()
    return await col.deleteOne({ _id: new ObjectId(id) });
  }
}
