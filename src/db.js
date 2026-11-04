import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// Novas importações para fazer o MongoDB Atlas funcionar
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config() // Carrega as variáveis do arquivo .env

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const productsPath = path.resolve(__dirname, '../products.json')
const usersPath = path.resolve(__dirname, '../users.json')

// === CONFIGURAÇÃO DO MONGODB ATLAS ===
const uri = process.env.MONGODB_URI
let dbConnection

const client = new MongoClient(uri)

export const connectToDatabase = async () => {
  try {
    await client.connect()
    // Critério de sucesso do Exercício 4: Valida a conexão com o ping
    await client.db("admin").command({ ping: 1 })
    console.log("✅ Conectado com sucesso ao MongoDB Atlas!")
    dbConnection = client.db('ptas3') // Define a database ptas3 exigida no Exercício 5
    return dbConnection
  } catch (error) {
    console.error("❌ Falha ao conectar no MongoDB Atlas:", error)
    throw error
  }
}

export const getDb = () => {
  if (!dbConnection) {
    throw new Error("Execute connectToDatabase primeiro!")
  }
  return dbConnection
}

// === FUNÇÕES ORIGINAIS (Mantidas para os produtos não quebrarem) ===
export async function readProducts() {
  try {
    const content = await readFile(productsPath, 'utf8')
    return JSON.parse(content)
  } catch (err) {
    if (err.code === 'ENOENT') return []
    throw err
  }
}

export async function writeProducts(products) {
  await writeFile(productsPath, JSON.stringify(products, null, 2), 'utf8')
}

export async function readUsers() {
  try {
    const content = await readFile(usersPath, 'utf8')
    return JSON.parse(content)
  } catch (err) {
    if (err.code === 'ENOENT') return []
    throw err
  }
}

export async function writeUsers(users) {
  await writeFile(usersPath, JSON.stringify(users, null, 2), 'utf8')
}
