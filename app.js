const express = require("express");
var cors = require('cors')
const app = express();
const port =  3300;
const formidable = require('formidable');

app.use(cors())


app.use(express.json({ extended: true }));

app.use('/api/v1/', require('./routes/table.route.js'));
// app.post('/upload', (req, res, next) => {
  
//   var form = new formidable.IncomingForm();

//   form.parse(req);
  
//   form.on('fileBegin', function (name, file){
//     console.log("!!!!!!!!",file)  
//     file.path = __dirname + './public/uploads/' + file.name;
      
//   });

//   form.on('file', function (name, file){
//       console.log('Uploaded ' + file.name, file);
//   });

//   res.json({"Status": "ok"})
// });

app.listen(port, () => {
  console.log(`Server is run on port:${port}`);
})