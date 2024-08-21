const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/fake-news-detector')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/fake-news-detector/index.html'));
});

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
