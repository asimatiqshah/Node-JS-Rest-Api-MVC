const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const userRouter = require('./routes/user.js');
const { ConnectionDB } = require('./connection.js');

//Variable
const app = express();
const port = 8080;

//Connection
const dbUrl = `mongodb+srv://TechzoneBatch4:mehmoodabad33@back-end-development.z2s7bgp.mongodb.net/?retryWrites=true&w=majority&appName=Back-End-Development`;
ConnectionDB (dbUrl);

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/users',userRouter);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})