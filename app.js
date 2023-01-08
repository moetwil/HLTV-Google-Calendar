const express = require('express')
const app = express()
const port = 3000

const HLTV = require('hltv-api').default

app.get('/', async (req, res) => {
  const news = await HLTV.getMatches()
  res.json(news)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})