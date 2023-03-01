import express from "express";
import cors from "cors";
import helmet from "helmet"
import { dbConnect } from "./src/config/dbConfig.js";
import messageRouter from "./src/routers/MessageRouter.js";
// connecting database
dbConnect();

const app = express();
const PORT = 8000;

// middlewares

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});
app.use(express.json());
app.use(cors());
app.use(helmet());
// handling router
app.use("/api/v1/messages", messageRouter);
app.use("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "response from root url",
    });
  } catch (error) {
    next(error);
  }
});

// listening server
app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server running on port ${PORT}`);
});
