var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConnection = require('./src/db/dbConnection');
var artist = require('./src/controller/artistsController');
var category = require('./src/controller/categoryController');
var app = express();
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
   res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
   res.header('Access-Control-Allow-Origin', '*');
   next();
});
app.options("*", function (req, res, next) {
   res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
   //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type,Authorization, Accept,Client-Security-Token,X-Access-Token,X-Key, Accept-Encoding, Key');
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

   res.header('Access-Control-Allow-Origin', '*');
   //other headers here
   res.status(200).end();
   //next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
   res.send({
      status: 200,
      message: 'OK'
   });
   res.end();
});

app.post('/api/artists', artist.createArtist);
/**
 * Request Method-
    POST
 * Request Url -
    http://localhost:3000/api/artists/
 * Payload data
  {
   "name": "Jon Bon Jovi",
   "image": "https://www.thefamouspeople.com/profiles/images/jon-bon-jovi-9.jpg",
   "category": "Rock",
    "songs": [
         {
            "name": "In These Arms",
            "image": "https://upload.wikimedia.org/wikipedia/tr/1/1a/Bon_jovi-in_these_arms_s.jpg"
         },
         {
            "name": "Have a Nice Day",
            "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcps-static.rovicorp.com%2F3%2FJPG_500%2FMI0001%2F933%2FMI0001933191.jpg%3Fpartner%3Dallrovi.com&f=1&nofb=1"
         },
         {
            "name": "It’s My Life",
            "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_rJSiOlpWe_o%2FTObmx5WpEbI%2FAAAAAAAAAPY%2FDOBBtX5Q4GA%2Fs320%2FBon%2BJovi-Its%2BMy%2BLife1.jpg&f=1&nofb=1"
         }
	   ]
   }
 * Success Response
    {
     message: 'Artist crated successfully',
     data: 'OK'
    }
 */


app.get('/api/songs', artist.index);
/**
 * Description-
    To get the list of songs for an artist
 * Request Method-
    GET
 * Request Url -
    http://localhost:3000/api/songs?name=Jon Bon Jovi
 * Success Response
    {
      "song": {
         "_id": "5e4d9a383cffde35a33a808a",
         "name": "Jon Bon Jovi",
         "image": "https://www.thefamouspeople.com/profiles/images/jon-bon-jovi-9.jpg",
         "songs": [{
            "name": "In These Arms",
            "image": "https://upload.wikimedia.org/wikipedia/tr/1/1a/Bon_jovi-in_these_arms_s.jpg"
         }, {
            "name": "Have a Nice Day",
            "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcps-static.rovicorp.com%2F3%2FJPG_500%2FMI0001%2F933%2FMI0001933191.jpg%3Fpartner%3Dallrovi.com&f=1&nofb=1"
         }, {
            "name": "It’s My Life",
            "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_rJSiOlpWe_o%2FTObmx5WpEbI%2FAAAAAAAAAPY%2FDOBBtX5Q4GA%2Fs320%2FBon%2BJovi-Its%2BMy%2BLife1.jpg&f=1&nofb=1"
         }]
      }
    }
 *
 */

app.get('/api/categories', category.index);
/**
 * Description-
    To get the all the category 
 * Request Method-
    GET
 * Request Url -
    http://localhost:3000/api/categories
 * Success Response
    { 
      category :[
        "Pop",
        "Rock"
      ]
    }
 */
app.get('/api/artists', artist.index);
/**
 * Description-
    To get the all the artist Data
 * Request Method-
    GET
 * Request Url -
    http://localhost:3000/api/artists
 * Success Response
    {
       "artist": [{
          "_id": "5e4d94093cffde35a33a8088",
          "name": "Justin Bieber",
          "image": "https://images-production.global.ssl.fastly.net/uploads/posts/image/53909/justin-bieber.jpg",
          "songs": [{
             "name": "All Around The World",
             "image": "https://upload.wikimedia.org/wikipedia/en/1/16/All_Around_the_World_%28Justin_Bieber_song%29.jpg"
          }, {
             "name": "All I Want Is You",
             "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeprintableonline.com%2Fassets%2Fimage%2Fprintable%2F1238%2Fmedium%2F&f=1&nofb=1"
          }, {
             "name": "All That Matters",
             "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QW12yPM010KBjGFBitwHkgHaHa%26pid%3DApi&f=1"
          }],
          "category": "POP"
       }]
    }
 */
app.get('/api/artists?category', artist.index);
/**
 * Description-
    To get the all the artist Data on to the basis of category
 * Request Method-
    GET
 * Request Url -
    http://localhost:3000/api/artists?category=ROCK
 * Success Response
    {
       "artist": [{
          "_id": "5e4d9a383cffde35a33a808a",
          "name": "Jon Bon Jovi",
          "image": "https://www.thefamouspeople.com/profiles/images/jon-bon-jovi-9.jpg",
          "category": "ROCK"
       }]
    }
 */
// Add headers
// catch 404 and forward to error handler
app.use(function (req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;