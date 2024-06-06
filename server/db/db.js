import mongoose from "mongoose";

 const connectoDb = () => {

    try {
        
        const connect = mongoose.connect("mongodb+srv://shrutisharma5102002:<password>@learnease.nodkj0t.mongodb.net/learnez?retryWrites=true&w=majority&appName=LEARNEASE")
         return connect;
    } catch (error) {
          console.log(error)
    }
 }

 export {connectoDb}