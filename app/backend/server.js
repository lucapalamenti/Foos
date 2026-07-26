const express = require('express');
const router = require('./router');

const PORT = process.env.PORT || 3000;

const app = express();
app.use( express.json({ limit: '1mb' }) );
app.use( router );

// Ask the server to listen for incoming connections
app.listen( PORT, () => {
    console.log( `Server listening on port: ${PORT}` );
});
