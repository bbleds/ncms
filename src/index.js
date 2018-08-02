import express from 'express'

const PORT = 5000
const app = express();

app.get('/', (req, res) => {
    res.json({test:'here'})
})

app.listen(PORT, () => {
  console.log('App listening on port PORT')
})
