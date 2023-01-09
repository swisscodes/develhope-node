import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const route = Router();
const prisma = new PrismaClient();

function retrieveRoute(mainRoute: Router) {
    mainRoute.use("/planets", route);
    route.get("/", async (req, res) => {
        const result = await prisma.planet.findMany();

        res.status(200).json(result);
    });
}

export default retrieveRoute;
