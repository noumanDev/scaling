const express = require('express');
const { Pool } = require('pg');

const port = process.env.PORT || 3000;


const app = express();
app.use(express.json());

// Configure the PostgreSQL connection pool
const pool = new Pool({
    user: 'myuser',
    host: 'localhost',
    database: 'mydb',
    password: 'mysecretpassword',
    port: 5432,
});

// Expecting 'id' as a URL parameter
app.get('/ingest/:id', (req, res) => {
    const requestId = req.params.id;
   
    // Simulate saving to the database
    saveToDatabase(requestId)
        .then(() => {
            res.status(200).send('Data Saved');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Database Error');
        });
});

function saveToDatabase(requestId) {
    // Simulate a database save operation
    return   pool.query('INSERT INTO request (id) VALUES ($1)', [requestId]);
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
