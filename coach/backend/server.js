const express = require('express'); // серверный import 
const cors =require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// DB - connection:
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
     useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
});
const connection = mongoose.connection; 
connection.once("open", () => {
    console.log("#MongoDB database connection - OK");
});

// API-routes: ...
const userRouter = require("./routes/users");
const exercisesRouter = require('./routes/exercises');

app.use('/users', userRouter)
app.use('/exercises', exercisesRouter)


// Start Server:
app.listen(port, () => {
    console.log(`#Server is running on port: ${port}`); 
});