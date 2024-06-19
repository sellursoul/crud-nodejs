import { app } from "./app";
import { connectDB } from "./repositories/db";

const port = process.env.PORT || 6000;

const startApp = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startApp();
