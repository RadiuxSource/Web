
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the root directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'price.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
});
