const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

app.post("/review",(req , res)=>{
    const {name, phone, movie, rating, city, review } = req.body;

    const sql = "Insert into reviews (name, phone, movie, rating, city, review ) values (?,?,?,?,?,?,?)";

    db.query(sql,[name, phone, movie, rating, city, review],(err,result)=>{
        if(err) return res.send(err);
        res.send("Review Added");    
    });
});

app.get("/reviews",(req, res)=>{
    db.query("select * from reviews",(err, result)=>{
        if(err) return res.send(err);
        res.send(result);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Server running"));