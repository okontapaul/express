const express = require('express')
const userRouter = express.Router()



userRouter.get('/user', (req, res)=>{
    res.send([
        {
            name: "Paulzy",
            dis: "Pay before service",
            Price: "$1000",
            rating: 5,

        },
        {
            name: "Pauline",
            dis: "Pay before you go",
            Price: "$1500",
            rating: 5,

        },
    ])
})


userRouter.get('/user/:id', (req, res)=>{
    res.send(
        {
            name: "iphone 15",
            dis: "pay now",
            price: "$1500",
            rating: 5,
        }
    )
})

userRouter.post('/user', (req, res)=>{
    res.send('user added successfully')
})

userRouter.put('/user/:id', (req, res)=>{
    res.send('user updates succesfully')
})

userRouter.delete('/user/:id', (req, res)=>{
    res.send('user deleted succesfully')
})

module.exports = userRouter