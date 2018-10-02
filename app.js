const express =  require('express');
const { mongoose } =  require('./database');
const morgan = require('morgan');
// initialize express app
const app = express();

let port = 8081;
app.set('port', process.env.PORT || port );

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/products', require('./routes/product.route'));

app.listen(app.get('port'), () => {
    console.log('Server on port: ' +port);
});