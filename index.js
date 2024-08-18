const express = require('express');
const SampQuery = require('samp-query');

const app = express();
const port = process.env.PORT || 8080;

app.get('/query/:host/:port', (req, res) => {
    const { host, port } = req.params;
    const options = {
        host: host,
        port: parseInt(port)
    };

    SampQuery(options, (error, response) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.json(response);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
