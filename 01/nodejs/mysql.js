require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "nodejs",
  password: process.env.DB_SECRET,
  database: "opentutorials",
  insecureAuth: true
});

connection.query("SELECT * FROM topic", function(error, results, fields) {
  if (error) console.log(error);
  console.log("The solution is: ", results);
});

connection.end();
