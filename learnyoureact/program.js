// Exercise 1 of 11: HELLO_REACT
// Exercise 2 of 11: COMPONENTS
// Exercise 3 of 11: PROPS
// Exercise 4 of 11: PROPTYPES
// Exercise 5 of 11: STATE

// Pretty close to copy-paste code from the instructions.

var express = require("express");
var app = express();

app.set("port", (process.argv[2] || 3000));
app.set("view engine", "jsx");
app.set("views", __dirname + "/views");
app.engine("jsx", require("express-react-views").createEngine({ transformViews: false }));

require("babel/register")({ ignore: false });

app.use("/", (req, res) => {
    res.render("index", {});
});

app.listen(app.get("port"), () => {
    console.log("Server running on port " + app.get("port") + ". Press CTRL+C to stop.");
});