const http = require('http');
const app = require('./app'); // Importing the Express app from app.js

const server = http.createServer(app); // Creating an HTTP server using the Express app

const PORT = process.env.PORT || 3000; // Setting the port to listen on
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) // Logging the port number to the console
});
// This code creates an HTTP server using the Express app and listens on the specified port
// This allows for better separation of concerns and makes it easier to manage the server setup
// The server will respond with "Hello, World!" when the root route is accessed
   