import app from "./app";
import { env } from "./config/env";
import { connectDatabase } from "./config/database";

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(Number(env.port), () => {
      console.log(
        `Server running on http://localhost:${env.port}`
      );
    });
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

startServer();