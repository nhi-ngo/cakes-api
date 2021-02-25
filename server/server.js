import express from 'express'
import cors from 'cors'

import routes from './routes.js'

const app = express()
const PORT = process.env.PORT || 3002

app.use(cors())

app.use('/api', routes)

app.get('/', (req, res) => res.send('Hello to Cakes API'))

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `)
})

export default app
