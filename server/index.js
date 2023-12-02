const express = require('express');
const logger = require('./middleware/logger');
var cors = require('cors')
const app = express();

app.use(cors())

// Initialize the middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use('/api/user', require('./routes/api/user'));
app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/testing', require('./routes/api/testing'));

const PORT = 3500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!!!`));