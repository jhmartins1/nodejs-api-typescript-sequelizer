import { db } from "./database/db";
import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.listen(7777, async () => {
  await db.sync();
  console.log("Server started on port 7777");
});
