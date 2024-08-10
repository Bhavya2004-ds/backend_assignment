const mongoose=require("mongoose")
const MovieSchema= new mongoose.Schema(

     {
        id:  {
            type:Number,
            required:true,
            unique:true
        },
        title: {
            type:String,
            required:true
        },
        year: {
            type:Number,
            required:true
        },
        genre: {
            type:[String],
            required:true
        },
        director:{
            type:String,
            required:true
        },
        cast: {
            type:[String],
            required:true
        }
    }
   
)
const MovieCollection=mongoose.model("movies",MovieSchema)
module.exports=MovieCollection