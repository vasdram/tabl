const path = require('path')
const { Router } = require('express');
const convert = require('../convert');
const formidable = require('formidable');
const router = new Router();


var cors = require('cors')


router.use(cors())

// router.get('/get_table', (req, res) => {
//   res.json(arr)
// })


router.post('/upload', (req, res, next) => {
  var form = new formidable.IncomingForm();
  let data = [];
  form.parse(req);
  form.on('fileBegin', function (name, file){
    file.path = __dirname + '/uploads/' + file.name;
  });
  form.on('file', function (name, file){
      // console.log('Uploaded ' + file.name, file);
      data = convert(file.name)
      
      res.json(data)
  });
  
});

module.exports = router;