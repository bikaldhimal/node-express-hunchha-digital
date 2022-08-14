const mysql = require("mysql");

exports.addUser = (req, res) => {
  // const db = mysql.createPool({
  //   host: "localhost",
  //   user: "root",
  //   password: "password",
  //   database: "test",
  // });
  //   const name = req.name;
  //   const email = req.email;
  //   const password = req.password;
  //   const addQuery = "INSERT INTO user (Name, Email, Password) VALUES(?,?,?);";
  //   db.query(addQuery, [name, email, password], (err, result) => {
  //     res.send("hi");
  //   });

  //   app.get("/", (req, res) => {
  // const sqlInsert =
  //   "INSERT INTO user (Name, Email, Password) VALUES('inception','good movie', 'OK');";
  // db.query(sqlInsert, (err, result) => {
    res.send("hello");
  // });
  //   });
};
