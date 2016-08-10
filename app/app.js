'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _nodeSassMiddleware = require('node-sass-middleware');

var _nodeSassMiddleware2 = _interopRequireDefault(_nodeSassMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('node_modules/bootstrap/dist'));

app.use((0, _nodeSassMiddleware2.default)({
  src: __dirname + '/public/styles/scss',
  dest: __dirname + '/public/styles',
  outputStyle: 'compressed',
  debug: true,
  prefix: '/styles'
}));

app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});