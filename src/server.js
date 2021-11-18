require("dotenv").config();
var express = require('express'); 
const configViewEngine = require('./config/viewEngine');
const initWebRoutes = require("./routes/web");
var bodyParser = require("body-parser");
const initCronJob = require("./config/cronJob");

let app = express();

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

// init all web routes
initWebRoutes(app);

//init cron job
initCronJob();

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`);
});


