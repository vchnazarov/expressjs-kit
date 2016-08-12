import express from 'express';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';
import MongoClient from 'mongodb';

const app = express();
const config = require('./config')('local');

app.use(express.static('node_modules/bootstrap/dist'));

app.use(
  sassMiddleware({
    src: __dirname + '/public/styles/scss',
    dest: __dirname + '/public/styles',
    outputStyle: 'compressed',
    prefix: '/styles'
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

MongoClient.connect(`mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}:${config.mongo.port}/${config.mongo.dbname}`, function(err, db) {
    if (err) {
        console.log(err);
    } else {
        var attachDB = function(req, res, next) {
            req.db = db;
            next();
        };

        app.get('/', (req, res) => {
            res.render('index', {title: 'Movie searcher'});
        });

        app.listen(4000, () => {
            console.log('Example app listening on port 4000!');
        });
    }
});

