import express from 'express'
import cakesData from './Cakes.js'
import getCake from './getCake.js'

const router = express.Router()

router.get('/allcakes', (req, res) => {
  res.json(cakesData)
})

router.get('/cake', (req, res) => {
  res.json(getCake())
})

export default router
