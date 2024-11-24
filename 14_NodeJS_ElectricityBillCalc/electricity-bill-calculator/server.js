const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Electricity bill calculation
app.post('/calculate', (req, res) => {
    const units = parseFloat(req.body.units);

    let bill = 0;
    if (units <= 50) {
        bill = units * 3.50;
    } else if (units <= 150) {
        bill = 50 * 3.50 + (units - 50) * 4.00;
    } else if (units <= 250) {
        bill = 50 * 3.50 + 100 * 4.00 + (units - 150) * 5.20;
    } else {
        bill = 50 * 3.50 + 100 * 4.00 + 100 * 5.20 + (units - 250) * 6.50;
    }

    res.json({ bill: bill.toFixed(2) });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
