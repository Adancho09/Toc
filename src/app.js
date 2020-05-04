const express = require('express');
const app = express();
const path = require('path');
const mongoose = require ('mongoose');

const bodyParser = require('body-parser');


//conect to DB
mongoose.connect('mongodb://localhost/TOC-DB')
.then(db=>console.log('DB connected'))
.catch(err => console.log(err));

//importing routes
const indexRouter=require('./routes/index');
//settings 

const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

//starting the server 
app.listen(port, (req, res) => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
//routes
app.use('/',indexRouter);

//app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());



