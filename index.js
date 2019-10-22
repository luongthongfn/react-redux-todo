const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'))
app.listen(3000, (req, res) => {
    console.log('server stated: http://localhost:3000');
})
app.get('/', function (req, res) {
    res.render('home');
})