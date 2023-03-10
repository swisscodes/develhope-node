import "dotenv/config";
import express from "express";
import urlsRouteV1 from "./route/urlsRouteV1";
import cors from "cors";

const router = express.Router();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

urlsRouteV1(router);

export default app;
