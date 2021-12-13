const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./configs/mongodb.config')

// Importing routes
const userRoutes = require('./routes/user.routes')  //user routes
const depositRoutes = require('./routes/deposit.routes'); //deposit routes
const withdrawRoutes = require('./routes/withdraw.routes');
const transferRoutes = require('./routes/transfer.routes');


dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(express.json());


// Using routes
app.use('/api/users', userRoutes);
app.use('/api/deposits', depositRoutes);
app.use('/api/withdraws', withdrawRoutes);
app.use('/api/transfers', transferRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`app is runnig in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold.italic))