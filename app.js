const express = require('express')
const hbs = require('express-hbs')
const getEntries = require('./models/db/getEntries')
const path = require('path');

const app = express()
const port = 3000

app.set('view engine', 'hbs');

app.engine('hbs', hbs.express4({  
    defaultLayout: __dirname + '/views/layouts/default.hbs',
    layoutsDir: __dirname + '/views/layouts'
})); 

app.set('views', path.join(__dirname,'/views'));

app.get('/', async (req, res) => {

    getEntries(function(data) { 
        res.render('index', { data });
    })

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))