const express = require('express');
const connectDB = require('./config/db.js');

//Connect Database
connectDB();

const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

//Define Routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/contacts', require('./routes/contacts.js'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
