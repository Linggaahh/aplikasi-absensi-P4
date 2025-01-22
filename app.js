// start -- express
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const ruanganRoutes = require('./routes/ruangan');
const absensiRoutes = require('./routes/absensi');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// end -- express

app.use('/ruangan', ruanganRoutes);
app.use('/absensi', absensiRoutes);

app.listen(3000, () => { // port
    console.log('Server is running on port http://localhost:3000');
});