const express = require("express");

const app = express();
const port =  3300;

app.get('/', function (req, res) {
  res.send('<a href="/api/auth/get_table">get table</a>')
})

// app.use(express.json({ extended: true }));

app.use('/api/auth/', require('./routes/table.route.js'));

app.listen(port, () => {
  console.log(`Server is run on port:${port}`);
})