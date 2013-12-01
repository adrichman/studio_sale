var connect = require('connect'),
  sass = require('node-sass'),
  app = connect.createServer(
  	sass.middleware({
  		src: __dirname + '/public/css/scss',
  		dest: __dirname + '/public/css',
  		debug: true
  	})
  ),
  port = process.env.PORT || 4000;

app.use(connect.static(__dirname + '/public'));
app.use(connect.compress());

app.listen(port, function(){
  console.log('serving on port: ', port);
});
