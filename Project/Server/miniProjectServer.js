let exp = require('express');
let mysql = require('mysql2');
let cors = require('cors');
let bp = require('body-parser');

let app = exp();

app.use(cors());
app.use(bp.json());

app.listen(9000, () => {
    console.log("on 9000 for mini project...!")
})

var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root",
    database: "try1"

})

con.connect(function (err) {
    if (!err) {
        console.log("DB connected");
    }
    else {
        console.log("db not connected");
        console.log(err.toString());
    }
})



// ****************************************************************************************************************
