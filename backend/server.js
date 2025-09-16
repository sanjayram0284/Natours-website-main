const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v0ga5ra.mongodb.net/natours?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.error('DB connection error:', err));

// server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
