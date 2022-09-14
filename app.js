const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = 3000;

const sequelize = new Sequelize('sqlite::db.sqlite3');

app.get('/', (req, res) => {
    res.json({ Hello: 'World' });
});

app.listen(3000, () => {
    console.log('app listening on port 3000...');
});