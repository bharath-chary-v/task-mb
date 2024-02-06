const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes')
const cors = require("cors");
const ProtectedRoute = require("./src/routes/protected")
const Tasks = require("./src/routes/tasks")
const app = express();
app.use(cors())

// Middleware
app.use(morgan('dev')); 
app.use(helmet()); 
app.use(compression()); 
app.use(express.json())



mongoose.connect('mongodb+srv://dbbharath:aA123456@cluster0.wdcrl.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
    app.use('/auth', authRoutes)
    app.use("/protected", ProtectedRoute)
    app.use("/tasks", Tasks)
// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
