import express from 'express'

const app = express()
const __dirname = import.meta.dirname

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on  http://localhost:${port}`)
})
