import mysql from 'mysql';

//连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql2019',
  database: 'jqdemos',
  port: 3306,
});

//单连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql2019',
  database: 'jqdemos',
});

export function queryRow(selectSQL) {
  connection.connect();
  connection.query(selectSQL, function(err, rows, fields) {
    if (err) throw err;
    return rows;
  });
  connection.end();
}

export default function queryRows(selectSQL) {
  pool.getConnection(function (err, conn) {
      if (err) {
        console.log("POOL ==> " + err);
      } else {
        conn.query(selectSQL,function(err,rows){
          if (err) {
            console.log('SELECT ==>', err);
          } else {
            return rows;
          }
          conn.release();
        });
      }
      
  });
}
