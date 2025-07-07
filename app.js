const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

app.use('/api/products', require('./routes/products'));
app.use("/api/auth", require("./routes/auth"))

app.listen(5000, () => console.log('Server started on port 5000'));