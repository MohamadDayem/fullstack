import express from "express";
import cors from "cors";
import router from "./router.js";


const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000', // keep this one, after checking the value in `backend/.env`
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use("/", router);

app.listen(8500, () => {
  console.log("Server started ....");
});

export default app;