const express = require('express')
const tomiRouter = express.Router()



tomiRouter.get('/products', (req, res)=>{
    res.send([
        {
            name: "iphone 15",
            dis: "lorem15",
            price: "$1500",
            rating: 5,
        },
        {
            name: "iphone 15",
            dis: "lorem15",
            price: "$1500",
            rating: 5,
        },
    
        
        
    ])
    
})

tomiRouter.get('/products/:id', (req, res)=>{
    res.send(
        {
            name: "iphone 15",
            dis: "lorem15",
            price: "$1500",
            rating: 5,
        },
    )

})

tomiRouter.post('/products', (req, res)=>{
    res.send("product added succesfully")
})

tomiRouter.put('/products/:id', (req, res)=>{
    res.send("product updates succesfully")
})

tomiRouter.delete('/products/:id', (req, res)=>{
    res.send("product deleted succesfully")
})



module.exports = tomiRouter