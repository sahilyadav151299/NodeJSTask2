const express = require('express');
const path = require('path');

const app = express();

const greetingRoute = require('./routes/greetings');
const createRoute = require('./routes/create');
const usersRoute = require('./routes/users');

app.use(greetingRoute);
app.use(createRoute);
app.use(usersRoute);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
