import express from "express";
import cors from "cors";

import { PORT } from "./constants";
import connectDB from "./config/db";
import routes from "./routes/timezonesRoutes";
import errorHandler from "./middleware/errorMiddleware";
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);
app.use(errorHandler);
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
