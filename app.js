const express = require("express");
const mongoose = require("mongoose");
const app = express();
const appRouter = require("./Router/index");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan  = require('morgan');


const port = process.env.PORT || 2020;
// const host = "localhost";
const host = '0.0.0.0';
// const signupController = require('./Controllers/signup');
// app.use("/user", signupController);
// app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use(morgan('dev'))
app.use("/", appRouter);


//mongodb+srv://<username>:<password>@zomato.cmpnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb+srv://rahuldb:bE68wjqtDQP9wZ6t@zomato.cmpnz.mongodb.net/Zomato?retryWrites=true&w=majority",
    {
    useUnifiedTopology: true,
    useNewUrlParser: true
    }
  )
  .then(
    app.listen(port, host, () => {
      console.log(`server is running on ${port} and host ${host}`);
    })
  )
  .catch((err) => console.log(err));


