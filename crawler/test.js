// install mysql2

const mysql2 = require('mysql2/promise');

(async () => {
  const connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });

  // simple query
  let result = await connection.query('SELECT * FROM `stocks`');
  let data = result[0];
  // console.log(result);
  console.log(data);

  connection.end();
})();