import mongoose  from "mongoose";
export const connectDatabase = () => {
  const MONGO_URI = process.env.MONGO_URI
    mongoose
      .connect(MONGO_URI)
      .then((c) => {
        console.log(`Mongodb connect to: ${c.connection.host}`);
      }).catch((e) =>{
        console.log(e);
      })
    };