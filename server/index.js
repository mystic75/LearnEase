const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const app = express();

// Log environment variables for debugging
console.log('Mongo URL:', process.env.MONGO_URL);
console.log('Port:', process.env.PORT);

mongoose.connect("mongodb+srv://shrutisharma5102002:hnwEHugyPzu4EfJ5@learnease.nodkj0t.mongodb.net/learnez?retryWrites=true&w=majority&appName=LEARNEASE")
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database not connected', err));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({extended:false}))

// dotenv.config()

app.use(cors());
app.use(express.json());
app.use('/', require('./routes/authRoutes'));

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    // Optional: use a different port or handle as needed
  } else {
    console.error(err);
  }
});
