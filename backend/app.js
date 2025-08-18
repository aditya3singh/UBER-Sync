const dotenv = require('dotenv');
dotenv.config(); // Environment variables ko load kar rahe hain
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // CORS middleware ko use kar rahe hain
app.use(express.json()); // JSON body parser middleware ko use kar rahe hain 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app; // ye se hum log kar rahe hain ki app ko export kar rahe hain
// taaki hum isko dusre files mein use kar sakein
// Ye line server ko start kar rahi hai aur port number ko console par print kar rahi hai
// Agar PORT environment variable set nahi hai, toh 3000 use hoga
// Ye code Express framework ka use karke ek simple web server bana raha hai
// Ye server '/' route par request aane par "Hello, World!" message return karega   
 
