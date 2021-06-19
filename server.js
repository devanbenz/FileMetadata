const fileRouter = require('./routes/FileAnalyseRoute')
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config()


app.use(cors());
app.use(express.json())
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.use('/api/fileanalyse', fileRouter)

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
