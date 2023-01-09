import { Router } from "express";
import planetsRoute from "../planets/planetsRoute";

const router = Router();

function urlsRouteV1(mainRoute: Router) {
    mainRoute.use("/", router);
    router.get("/", (req, res) =>
        res.status(200).json({ msg: "Hello Develhope" })
    );
    planetsRoute(router);
}

export default urlsRouteV1;
