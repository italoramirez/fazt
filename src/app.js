const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();


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