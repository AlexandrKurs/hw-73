const express = require('express');
const VigenereCipher = require('vigenere-cipher');
const app = express();

const password = 'password';
const port = 8000;

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encodedText = VigenereCipher.encrypt(text, password);
    res.send(encodedText);
});

app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decodedText = VigenereCipher.decrypt(text, password);
    res.send(decodedText);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});