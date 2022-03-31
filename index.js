const express = require('express');
const app = express();
var cors  = require("cors");
const routes = require("./routes/routes")

const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //autorizar requisição em qualquer rota
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors()); 
    next();
})

app.use(routes)

app.listen(port,()=>{
    console.log(`servidor rodando na porta http://localhost:${port}`)
})