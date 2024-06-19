import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://illianesterukdevv:2106Skkz!@mydb.0z9gu6m.mongodb.net/?retryWrites=true&w=majority&appName=MyDB";

  export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "MyDB",
    });
  } catch {
    await mongoose.disconnect();
  }
};
