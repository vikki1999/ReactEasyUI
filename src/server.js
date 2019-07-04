var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());//跨域

//mysql数据库连接池配置
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'mysql2017',
	database: 'tracesystem',
});

// home
app.get('/', (req, res)=>{
	res.send("oh yeah.");
});


// users 
app.get('/users', (req, res) => {
	pool.query('SELECT * FROM users', (err, row)=>{
        if (err) throw err;
		res.send(row);
	});
	
})

// //students
// app.get('/students', (req, res) => {
// 	pool.query('CALL student_grid();', (err, row)=>{
//         if (err) throw err;
// 		res.send(row);
// 	});
	
// })

// //menu
// app.get('/menu', (req, res) => {
// 	pool.query('SELECT * FROM users', (err, row)=>{
//         if (err) throw err;
// 		res.send(row);
// 	});
	
// })

//端口设置
app.listen(3001, ()=>{
	console.log("Server side, listening port 3001.");
});