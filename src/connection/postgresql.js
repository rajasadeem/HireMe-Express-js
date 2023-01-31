const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Project_HireMe',
  password: 'qwhd1122',
  port: 5432,
})
module.exports= {pool}