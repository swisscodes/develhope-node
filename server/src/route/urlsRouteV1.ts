import { Router } from "express";

//@ts-ignore
const router = Router();

//@ts-ignore
function urlsRouteV1(mainRoute: Router) {
    //@ts-ignore
    mainRoute.get("/", (req, res) =>
        res.status(200).json({ msg: "Hello Develhope" })
    );
}

export default urlsRouteV1;
