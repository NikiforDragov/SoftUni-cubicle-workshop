const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const routes = require('./routes');
const dbConnect = require('./config/dbConfig');

const app = express();

const PORT = 5000;

dbConnect()
    .then(() => console.log('Db connected successfully!'))
    .catch(err => {
        console.log('Db error: ', err);
    });
    
expressConfig(app);
handlebarsConfig(app);

app.use(routes)


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));