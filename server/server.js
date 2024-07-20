const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'early_learner'
});

app.get('/', (req, res) => {
    return res.json({message: 'From the backend'});
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json({Message: "Error in the SQL query", err});
        return res.json(data);
    })
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});