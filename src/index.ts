import { AppDataSource } from "./data-source";
import * as express from "express";
import { doctorRouter } from "./modules/doctors";

const { PORT = 8080 } = process.env;
const app = express();

app.use(express.json());

app.use("/users", doctorRouter);

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
