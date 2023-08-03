const express = require('express');
const app = express();
const watches = require('./watches');
var cors = require('cors')

app.use(cors())

app.get('/watches', (req, res) => {
    res.send(watches)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));