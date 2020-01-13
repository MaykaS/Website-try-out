// import express (after npm install express)
const express = require('express')
const app = express()
const port = 3000

var {PythonShell} = require('python-shell');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// create a route for the app
app.post('/sendmail',(req, res) => { var options = {
  mode: 'text',
  pythonPath: '/usr/bin/python2.7',
  pythonOptions: ['-u'],
  scriptPath: '/users/studs/bsc/2019/adinech/.html',
  args: [req.body.Name,req.body.Email, req.body.Name + " with " + req.body.Email + " sent you " + req.body.Message] //these are the arguments that the python script will receive
};

PythonShell.run('client.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});})

// make the server listen to requests
app.listen(port, () => console.log(`server is listening on port ${port}`))

