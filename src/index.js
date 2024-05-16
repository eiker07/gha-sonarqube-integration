//now it load express module with `require` directive
let express = require('express')
const dice = require('./dice')
let app = express()
//Define request response in root URL (/) and response with a die number!
app.get('/', function (req, res) {
  res.send( dice.roll())
})
//Soy un comentario
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})