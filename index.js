#! /usr/bin/env node
var fs = require("fs-extra");
var path = require("path");
var server = require("./server");

var args = process.argv;
var command = args[2];
var option = args[3];

switch (command) {
  case undefined : return needsCommand();
  case "new"     : return newProject(option);
  case "start"   : return startServer(option);
  default        : return commandNotFound();
}

// Keep this process alive so our async tasks finish
process.stdin.resume();

function newProject(name) {
  // [x] Create `{{name}}` and `.freact` directory
  // [x] Copy boilerplate to `.freact`

  var projectPath = path.join(process.cwd(), name || "");
  fs.mkdir(projectPath, function(err) {
    if (err)
      if (!fs.existsSync(projectPath))
        return process.exit(1);

    copyBoilerplate(projectPath);
  });
}

function startServer(port) {
  server(port);
}

function commandNotFound() {
  console.log("Sorry, bud! I don't recognize that action.");
  console.log("(Try 'freact new' or 'freact start'.)");
}

function needsCommand() {
  console.log("Give me something to do! ('new' or 'start')");
}

function copyBoilerplate(projectRoot, next) {
  var boilerPath = path.join(__dirname, "boilerplate");
  fs.copySync(boilerPath, projectRoot);
  console.log("Copied boilerplate.");
}

function getFreactPath(projectRoot) {
   return path.join(projectRoot, ENVIRONMENT_DIRECTORY_NAME);
}
