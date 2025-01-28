import app from './app';
import connectDB from './database';

const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



