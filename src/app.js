const path = require('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//conectando la db
mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db connected'))
    .catch(err => console.error(err));


//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//routes 
app.use('/', indexRoutes);

//starting routes
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
})