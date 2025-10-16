const express = require('express');
const app = express();
const port = 3000; // You can choose any available port
app.use('/',express.static('dist'));
app.get('/api', (req, res) => {
    console.log('Received request at /api');
    res.send('Hello World from Express!');
});

// Start the server
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});