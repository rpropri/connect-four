const express = require('express');
const app = express();

// app.set('port', 3000);
const port = 3000;

app.use(express.static('./client/dist'));

app.listen(port, () => {
  console.log("listening on port", port);
});