import express from 'express'
import cors from 'cors' 
import productsRoutes from './routes/products.routes.js'
import usersRoutes from './routes/users.routes.js'
const app = express()

app.use(cors()) 
app.use(express.json())

app.use('/products', productsRoutes)
app.use('/users', usersRoutes) 

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ erro: err.message })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
