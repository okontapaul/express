const express = require('express')  //importing express
const app = express()
const port = 1701


app.get('/', (req, res)=>{
    res.send('welcome to my homepage')
})

const productRouter = require("./routes/product")
app.use(productRouter)

const usersRouter = require("./routes/users")
app.use(usersRouter)

app.listen(port, ()=>{
    console.log('Server is running successfully')
})