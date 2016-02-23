
var path = require("path");
var express = require("express");
var app = express();

var browserify = require("browserify");
var reactify = require("reactify")

function startServer(projectRoot) {

  app.get('/', function(req, res) {
    var entryFile = path.join(process.cwd(), ".freact", "index.html");
    res.sendFile(entryFile);
  });

  app.get('/freact-javascript', function (req, res) {

    // <project>/.freact/index.js
    var nodeModules = path.join(__dirname, "node_modules");
    var reactPath = path.join(nodeModules, "react");
    var reactDOMPath = path.join(nodeModules, "react-dom");

    var entryFile = path.join(process.cwd(), "app.js");

    var b = browserify();
    b.require(reactPath, { expose: 'react' });
    b.require(reactDOMPath, { expose: 'react-dom' });
    b.transform(reactify);
    b.add(entryFile);
    b.bundle().pipe(res);

  });

  app.listen(8000, function() {
    console.log("Listening on 8000!");
  });
}

module.exports = startServer;
