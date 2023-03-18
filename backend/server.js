const express = require('express') 
const connectDB = require('./config/db')
const dotenv = require('dotenv')


dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data


app.get('/', (req, res) => {
    res.send('API is running sucessfully')
})

app.get('/api/chats', (req, res) => {
    res.send(chats)
})

app.get('/api/chats/:id', (req, res) => {
    // res.send(req)
    const singleChat = chats.find((c) =>c.id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 5000

app.listen(5000, () => {
    console.log(`server is started on port ${PORT}.yellow.bold`)
})