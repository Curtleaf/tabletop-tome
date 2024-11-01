import express from 'express';
import { connectToDatabase } from './utils/db/db';
const app = express();

// Connect to the database
(async () => {
  try {
    const db = await connectToDatabase();
    console.log('Connected to MongoDB!');

    // Store the database connection in a global variable or pass it to your routes
    app.locals.db = db; // Example: storing it in app.locals


    // ... rest of your application logic (routes, etc.) ...
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit the process if the database connection fails
  }
})();

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
