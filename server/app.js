const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const app = express();

app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb://mongo:27017/rajinikanth-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
