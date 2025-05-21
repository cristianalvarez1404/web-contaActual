import express from 'express'
import { connectionToPostgresql } from './config/dbConnection.js'

const app = express()

app.get('/', (req,res) => {
  return res.json({data:[]})
})

app.listen(3000, async () => {
  console.log(`Server running on http://localhost:3000`)
  await connectionToPostgresql()
})