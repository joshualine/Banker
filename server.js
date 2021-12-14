const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./configs/mongodb.config')

// Importing routes
const userRoutes = require('./routes/user.routes')  //user routes
const transactionRoutes = require('./routes/transactions.routes');


dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());


// Using routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`app is runnig on port ${PORT}`.yellow.bold.italic))