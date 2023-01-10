// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/', (req, res) => {
  let date = data = new Date(Date.now());
  res.json({ unix: date.valueOf(), utc: date.toUTCString() });
});

// your first API endpoint... 
app.get("/api/:time", function(req, res) {
  let timeString = req.params.time;

  let time = (timeString.includes('-') || timeString.includes(' '))? timeString : parseInt(timeString);
  let date = new Date(time);
  if (timeString === '') { data = new Date(Date.now()) }

  //05 October 2011

  if (date == 'Invalid Date') { return res.json({ error: "Invalid Date" }); }
  res.json({ unix: date.valueOf(), utc: date.toUTCString() });
});


// your first API endpoint... 
app.get("/api/timestamp/:time", function(req, res) {
  let timeString = req.params.time;
  ///api/timestamp/05 October 2011
  let date = new Date(timeString);
  
  res.json({ unix: date.valueOf(), utc: date.toUTCString() });
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
