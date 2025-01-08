import dotenv from "dotenv"
import connectDB from "./db/index.js" 

dotenv.config({
    path:'./env'
})
connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("server is running on port",process.env.PORT)
    })
}).catch((error)=>{
    console.log(`Mongo db connection failed!!!:- ${error}`);
})
/*
(async()=>{
    try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("Error in database connection",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console,log(`app is listening on port numner: ${process.env.PORT}`)
    })
    } catch (error) {
        console.error("Error :",error);
        throw err
        
    }
})()
*/