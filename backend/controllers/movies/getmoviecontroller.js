
const mongoose=require("mongoose")
const MovieCollection=require("../../models/MovieSchema")

const getmoviecontroller=async(req,res)=>{
    try{
        const {title,id}=req.params
        let movies
        if(title){
    
        const searchtitle=title.toLowerCase();
            
            movies=await MovieCollection.find({

                title:{$regex:new RegExp(searchtitle,'i')}})

        }
        else if(id){

            movies=await MovieCollection.find({
               _id:id})

        }
     

        else{
             movies = await MovieCollection.find()
            console.log('Movies fetched successfully')
        }
        
         if(!movies || movies.length==0){
            return res.status(404).send({message:"Product not found"})
         }
         
         
         res.status(200).send(movies)
    }
    catch(error){
        res.status(504).send({
            message:"error fetching products"
        })
        console.log(`Error occured :${error}`)

    }

}
module.exports=getmoviecontroller
