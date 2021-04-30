const express = require('express');
const app = express();
let database = require('./database');
const PORT = process.env.PORT || 3001;

app.use('/userRoutes', require('./routes/UserRoutes'));

app.get('/', (req, res) => {
  res.send('I am in the right route');
});

app.listen(PORT, () => console.log(`listening, on ${PORT}`));

