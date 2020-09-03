const express = require("express");
var cors = require('cors')
const app = express();
const port =  3300;
const formidable = require('formidable');
const { Pool, Client } = require('pg')
const conString = 'postgres://postgres:@localhost/imperialErp';

app.use(cors())
app.use(express.json({ extended: true }));


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'imperialErp',
  password: '',
  port: 3211,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

async function con () {
  const client = new Client()
  await client.connect()
  const res = await client.query('SELECT NOW()')
  await client.end()
}

con()
app.use('/api/v1/', require('./routes/table.route.js'));






app.listen(port, () => {
  console.log(`Server is run on port:${port}`);
})