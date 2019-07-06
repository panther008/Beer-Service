var config = require("./config");
var core = require("./core");
var beerRoute = require("./route.beer");

var express = require("express");
var logger = core.createLogger();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var apiVersion = "/api/v1/";

app.route(apiVersion + "beer")
  .get(beerRoute.mountGet)
  .put(beerRoute.mountPut)
  .post(beerRoute.mountPost)
 .delete(beerRoute.mountDelete);

logger.info("Listening on :" + config.server.port);
app.listen(config.server.port);
