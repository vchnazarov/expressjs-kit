import express from 'express';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';

const app = express();

app.use(express.static('node_modules/bootstrap/dist'));

app.use(
  sassMiddleware({
    src: __dirname + '/public/styles/scss',
    dest: __dirname + '/public/styles',
    outputStyle: 'compressed',
    debug: true,
    prefix:  '/styles'
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});