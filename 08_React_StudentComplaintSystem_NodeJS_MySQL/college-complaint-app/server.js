const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const complaintRoutes = require('./routes/complaints');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/complaints', complaintRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
