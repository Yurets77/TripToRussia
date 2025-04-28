require('dotenv').config();
const express = require('express'); //Строка 1
const app = express(); //Строка 2
const port = process.env.PORT; //Строка 3
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require('./router/index')
const errorMiddleware = require('./middleware/error-middleware');

// Сообщение о том, что сервер запущен и прослушивает указанный порт

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' // или '*'
}))
app.use(express.json());
app.use(cookieParser())
app.use('/api', router)
app.use(errorMiddleware)

// Создание GET маршрута


app.get("/api/city/:city", (req, res) => {
    const city = req.params.city
    const filePath = path.join(__dirname, `./JSON/${city}.json`)

    if (fs.existsSync(filePath)) {
        const jsonData = fs.readFileSync(filePath, 'utf-8')
        res.json(JSON.parse(jsonData))
    } else {
        res.status(404).send(`City not found: ${city}`)
    }
})

app.get("/api/region/:region", (req, res) => {
    const region = req.params.region
    const filePath = path.join(__dirname, `./JSON/${region}.json`)

    if (fs.existsSync(filePath)) {
        const jsonData = fs.readFileSync(filePath, 'utf-8')
        res.json(JSON.parse(jsonData))
    } else {
        res.status(404).send(`Region not found: ${region}`)
    }
})

app.get("/api/place/:place", (req, res) => {
    const place = req.params.place
    const filePath = path.join(__dirname, `./JSON/${place}.json`)

    if (fs.existsSync(filePath)) {
        const jsonData = fs.readFileSync(filePath, 'utf-8')
        res.json(JSON.parse(jsonData))
    } else {
        res.status(404).send(`Region not found: ${place}`)
    }
})

const start = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => console.log(`Listening on port ${port}`));

    } catch (e){
        console.log(e)
    }
}

start()