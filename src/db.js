import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const productsPath = path.resolve(__dirname, '../products.json')
const usersPath = path.resolve(__dirname, '../users.json')

export async function readProducts() {
  try {
    const content = await readFile(productsPath, 'utf8')
    return JSON.parse(content)
  } catch (err) {
    if (err.code === 'ENOENT') {
      return []
    }

    throw err
  }
}

export async function writeProducts(products) {
  await writeFile(
    productsPath,
    JSON.stringify(products, null, 2),
    'utf8'
  )
}

export async function readUsers() {
  try {
    const content = await readFile(usersPath, 'utf8')
    return JSON.parse(content)
  } catch (err) {
    if (err.code === 'ENOENT') {
      return []
    }

    throw err
  }
}

export async function writeUsers(users) {
  await writeFile(
    usersPath,
    JSON.stringify(users, null, 2),
    'utf8'
  )
}
