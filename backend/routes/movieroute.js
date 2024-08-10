const express=require("express")
const getmoviecontroller=require("../controllers/movies/getmoviecontroller")
const router=express.Router()
router.get('/',getmoviecontroller)
router.get('/title/:title',getmoviecontroller)
router.get('/id/:id',getmoviecontroller)



module.exports=router