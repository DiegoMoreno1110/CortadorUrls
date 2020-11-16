const express = require('express');
const webRoutes = require('./routes/web');

const app = express();
const cors = require('cors');
let bodyParser = require('body-parser');

const appConfig = require('./configs/app');


app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
    origin: 'http://localhost:3000', 
    credentials: true,
    })
);

app.use('/urls', require('./routes/web'));


app.use(express.urlencoded({ extended: true }))
app.use(express.json());


//app.use('/', webRoutes);


app.listen(appConfig.expressPort, () => {
    console.log(`Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});
