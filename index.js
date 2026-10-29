const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});


const korisnici = [
    { id: 1, ime: 'Marko', prezime: 'Maric' },
    { id: 2, ime: 'Ana', prezime: 'Anic' },
    { id: 3, ime: 'Ivan', prezime: 'Ivic' }
];


app.get('/users', (req, res) => {
    res.json(korisnici);
});

app.listen(PORT, () => {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});