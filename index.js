const express = require('express'); 
const app = express();
const port = process.env.PORT || 9001;

app.use(express.static(__dirname + '/storybook-static'));

app.listen(port, () => console.log('Listening to port', port));