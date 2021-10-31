const express = require('express');
const catalog = require('./catalog.js');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express()
 server.use(cors())

server.get('/catalog', (req, res) => {
    res.json(catalog)
})

server.get('/catalog/:id', (req, res) => {
    const {id} = req.params;
    const product = catalog.find(el =>el.id === +id);
    res.json(product)
})

server.listen(8000, () => {
    console.log('Server is running');
});

const PORT = config.get('port') || 8000



async function start() {
    try {
      await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
      console.log('Server Error', e.message)
      process.exit(1)
    }
  }
  
 