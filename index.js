var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var contentful = require('contentful');
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'xlmhuyr0apt7',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'b62e8371d44785de93d497eee27993000bcf8b6d11ffcb81c9f207e0b438e607'
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.


app.get('/', function(req,res) {
  client.getEntry('4BqrajvA8E6qwgkieoqmqO')
  .then((entry) => res.render('index', {entry : entry}));
});

app.listen(port);
