const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('zuri poject')
});

app.listen(PORT,() => console.log("serving on port ${port}"));