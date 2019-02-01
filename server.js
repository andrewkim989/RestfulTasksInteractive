var express = require("express");
var app = express();
app.use(express.static(__dirname + "/RestfulTasksInteractive/dist/RestfulTasksInteractive"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(5678, function() {
    console.log("listening on port 5678");
});