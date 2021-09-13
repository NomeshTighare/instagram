const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./keys')
    //ap3oSVu4W5KbNC53

require('./models/user');
require('./models/post');
app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'));



mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Connected to Mongo");
})
mongoose.connection.on('error', (err) => {
    console.log("Error in connecting ", err);
})

app.listen(PORT, () => {
    console.log("server is running on", PORT)
})