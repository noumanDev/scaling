const express = require('express');
const app = express();
app.use(express.json());

let processedRequests = new Set(); // In-memory store for deduplication

// Expecting 'id' as a URL parameter
app.get('/ingest/:id', (req, res) => {
    const requestId = req.params.id;

    if (processedRequests.has(requestId)) {
        return res.status(200).send('Duplicate Request Ignored');
    }

    processedRequests.add(requestId);

    // Simulate saving to the database
    saveToDatabase(requestId)
        .then(() => {
            res.status(200).send('Data Saved');
        })
        .catch((error) => {
            res.status(500).send('Database Error');
        });
});

function saveToDatabase(data) {
    // Simulate a database save operation
    return new Promise((resolve, reject) => {
        // Replace with actual database logic
        resolve();
    });
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
