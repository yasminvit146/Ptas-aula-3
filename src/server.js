import express from 'express'
import cors from 'cors' 
import productsRoutes from './routes/products.routes.js'
import usersRoutes from './routes/users.routes.js'
import { connectToDatabase } from './db.js'


const app = express()

app.use(cors()) 
app.use(express.json())

app.use('/products', productsRoutes)
app.use('/users', usersRoutes) 

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ erro: err.message })
})

const PORT = 3000


connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ Não foi possível iniciar o servidor por falhas no banco de dados:', err)
  })
