const express = require('express');

const app = express();
const port = 8000;

app.get('/hello', (reg,res) => {
    return res.send(`Hello`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})