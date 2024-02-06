const express = require("express")
const authenticate = require('../middleware/authenticate')



const router = express.Router()

router.get('/example',authenticate,(req, res)=>{
    res.json({message:"success"})
})



module.exports = router