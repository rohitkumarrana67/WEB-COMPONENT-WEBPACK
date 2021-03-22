const express = require("express")
const app = express()
const port = 4001

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log('Server Started!!')
})