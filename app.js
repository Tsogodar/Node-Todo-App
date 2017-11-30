const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const connection = require('./config/database');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'false'}));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use('/', require('./controllers/index'));
app.use('/todo', require('./controllers/todo'));

app.use((req, res) => {
    let error = new Error();
    error.status = 404;
    res.render('errors/404');

});

module.exports = app;