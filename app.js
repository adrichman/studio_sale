var connect = require('connect'),
  app = connect.createServer(),
  port = process.env.PORT || 4000;

app.use(connect.static(__dirname + '/public'));
app.use(connect.compress());

app.listen(port, function(){
  console.log('serving on port: ', port);
});